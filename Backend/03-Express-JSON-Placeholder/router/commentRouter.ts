import express, { Request, Response, Router } from "express";
import * as commentController from "../controllers/commentController";

const commentRouter:Router = Router();

/**
 * @uses : get all comments
 * @url : http://127.0.0.1:9999/comments/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

commentRouter.get("/", async (request:Request, response:Response) => {
    await commentController.getAllComments(request,response);
})

/**
 * @uses : get comment
 * @url : http://127.0.0.1:9999/comments/:commentId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

commentRouter.get("/:commentId", async (request:Request, response:Response) => {
    await commentController.getComment(request,response);
})

export default commentRouter;