import { Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";
import { IUser } from "../models/IUser";

const filePath = path.join(__dirname, "..", "database", "users.json");

/**
 * @uses : get all users
 * @url : http://127.0.0.1:9999/users/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getAllUsers = async (request:Request, response:Response) => {
    try{
        const users:IUser[] = await jsonfile.readFile(filePath);
        response.status(200).json(users);
    }
    catch(error){
        response.status(500).json({
            status : "FAILED",
            error : error
        });
    }
};

/**
 * @uses : get user
 * @url : http://127.0.0.1:9999/users/:userId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getUser = async (request:Request, response:Response) => {
    try{
        const {userId} = request.params;
        const users:IUser[] = await jsonfile.readFile(filePath);
        if(userId){
            const user:IUser|undefined = users.find(item => item.id.toString() === userId);
            if(user){
                response.status(200).json(user);
            }
            else{
                response.status(404).json({msg : "No user found"});
            }
        }  
    }
    catch(error){
        response.status(500).json({
            status : "FAILED",
            error : error
        });
    }
};