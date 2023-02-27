import express, { Request, Response, Router } from "express";
import {body, validationResult} from "express-validator";
import bcrypt from "bcryptjs";

const userRouter:Router = Router();

userRouter.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "I am from User Router"
    });
})

/**
 * @url : http://127.0.0.1:9999/users/register
 * @param : username, email, password
 * @method : POST
 * @access : PUBLIC
 */

userRouter.post("/register", [
    body("username").isLength({min : 5}).withMessage("Username is required"),
    body("email").isEmail().withMessage("Proper Email is required"),
    body("password").isStrongPassword().withMessage("Proper Password is required")
], async (request:Request, response:Response) => {

    try{
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
        }
        const {username, email, password} = request.body;

        // encrypt the password
        const salt = await bcrypt.genSalt(15);
        const hashPassword = await bcrypt.hash(password, salt)

        // verify
        const isMatch = await bcrypt.compare("Rajan@100", hashPassword);

        response.status(200).json({
            msg : "I am from User Router",
            requestBody : {
                username : username,
                email : email,
                password : password,
                hashPassword : hashPassword,
                isMatch : isMatch ? "YES" : "NO"
            }
        });
    }
    catch(e){

    }
    
})

export default userRouter;