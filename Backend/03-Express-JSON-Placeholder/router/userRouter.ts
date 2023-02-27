import express, { Request, Response, Router } from "express";
import * as userController from "../controllers/userController";

const userRouter:Router = Router();

/**
 * @uses : get all users
 * @url : http://127.0.0.1:9999/users/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

userRouter.get("/", async (request:Request, response:Response) => {
    await userController.getAllUsers(request,response);
})

/**
 * @uses : get album
 * @url : http://127.0.0.1:9999/users/:userId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

userRouter.get("/:userId", async (request:Request, response:Response) => {
    await userController.getUser(request,response);
})

export default userRouter;