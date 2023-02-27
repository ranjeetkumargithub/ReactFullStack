import express, { Request, Response, Router } from "express";

const adminRouter:Router = Router();

adminRouter.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "I am from Admin Router"
    });
})

export default adminRouter;