import express, { Request, Response, Router } from "express";

const userRouter:Router = Router();

userRouter.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "I am from User Router"
    });
})

userRouter.post("/", (request:Request, response:Response) => {
    const requestBody = request.body;
    const requestHeader = request.headers;
    response.status(200);
    response.json({
        msg : "I am from User Router",
        requestBody : requestBody,
        requestHeader : requestHeader
    });
})

export default userRouter;