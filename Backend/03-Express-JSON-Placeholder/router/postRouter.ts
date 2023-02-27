import express, { Request, Response, Router } from "express";
import * as postController from "../controllers/postController";

const postRouter:Router = Router();

/**
 * @uses : get all posts
 * @url : http://127.0.0.1:9999/posts/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

postRouter.get("/", async (request:Request, response:Response) => {
    await postController.getAllPosts(request,response);
})

/**
 * @uses : get post
 * @url : http://127.0.0.1:9999/posts/:postId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

postRouter.get("/:postId", async (request:Request, response:Response) => {
    await postController.getPost(request,response);
})

export default postRouter;