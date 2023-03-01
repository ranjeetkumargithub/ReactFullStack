import {Request, Response} from "express";
import {validationResult} from 'express-validator';
import mongoose from "mongoose";
import { IUser } from "../db/models/IUser";
import UsersTable from "../db/schemas/userSchema";
import bcryptjs from "bcryptjs";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";

export interface UserPayload {
    id : string | undefined;
    email :string;
}

/**
 * @usage : Register a user
 * @method : POST
 * @url : http://localhost:9000/users/register
 * @access : PUBLIC
 * @param : username, email, password
 * @param request
 * @param response
 */
export const registerUser = async (request: Request, response: Response) => {
    try {
        // validate the form
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            return response.status(400).json({errors : errors.array()});
        }

        // read the form data
        const {username, email, password} = request.body;

        // check if the user is already exists
        const user : IUser|undefined|null = await UsersTable.findOne({email : email});
        if(user){
            return response.status(400).json({msg : "User is already exist"});
        }

        // encrypt the password
        const salt = await bcryptjs.genSalt(11);
        const hashPassword = await bcryptjs.hash(password, salt);

        // get image url from Gravatar DB
        const imageUrl = gravatar.url(email, {s: '200', r: 'pg', d: 'mm'});

        // insert the data
        const theUser:IUser = {
            username : username,
            email : email,
            password : hashPassword,
            imageUrl : imageUrl,
        };
        const createdUser:IUser|undefined|null = await new UsersTable(theUser).save();
        if(createdUser){
            return response.status(200).json({
                msg: "Registration is success",
                data: createdUser
            })
        }


    } catch (error: any) {
        return response.status(500).json({
            msg: error.message
        });
    }
};

/**
 * @usage : Login user
 * @method : POST
 * @url : http://localhost:9000/users/login
 * @access : PUBLIC
 * @param : email, password
 * @param request
 * @param response
 */
export const loginUser = async (request: Request, response: Response) => {
    try {
        // validate the form
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            return response.status(400).json({errors : errors.array()});
        }
        // read the form data
        const {email, password} = request.body;

        // check if the email is exist 
        const user:IUser|undefined|null = await UsersTable.findOne({email : email});
        if(!user){
            return response.status(401).json({msg: "Invalid Credentials Email"});
        }

        // check/decode the password
        const isMatch:boolean = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return response.status(401).json({msg: "Invalid Credentials Password"});
        }

        // login :- create a token
        const secretKey:string|undefined = process.env.EXPRESS_JWT_SECRET_KEY;
        const payload:{user:UserPayload} = {
            user: {
                id : user._id,
                email : user.email
            }
        }
        if(secretKey){
            jwt.sign(payload, secretKey, {expiresIn : 100000000000, algorithm: "HS256"}, (error, encoded) => {
                if(error){
                    return response.status(401).json({msg: "Token creation is failed"});
                }
                else{
                    return response.status(200).json({
                        msg: "Login is success",
                        token : encoded,
                        data : user
                    });
                }
            })
        }

    } catch (error: any) {
        return response.status(500).json({
            msg: error.message
        });
    }
};

/**
 * @usage : Get user Info
 * @method : GET
 * @url : http://localhost:9000/users/me
 * @access : PRIVATE
 * @param : no-params
 * @param request
 * @param response
 */
export const getUserInfo = async (request: Request, response: Response) => {
    try {
        const decodedToken:any = request.headers["user-info"];
        if(decodedToken){
            const userId = decodedToken.id;
            const mongoUserId = new mongoose.Types.ObjectId(userId);
            const user: IUser |undefined | null = await UsersTable.findById(mongoUserId);
            if(user){
                return response.status(200).json(user);
            }
        }
    } catch (error: any) {
        return response.status(500).json({
            msg: error.message
        });
    }
};








