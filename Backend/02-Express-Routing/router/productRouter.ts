import express, { Request, Response, Router } from "express";

const productRouter:Router = Router();

productRouter.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "I am from Product Router"
    });
})

export default productRouter;