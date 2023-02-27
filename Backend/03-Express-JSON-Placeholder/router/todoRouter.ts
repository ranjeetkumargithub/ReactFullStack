import express, { Request, Response, Router } from "express";
import * as todoController from "../controllers/todoController";

const todoRouter:Router = Router();

/**
 * @uses : get all todos
 * @url : http://127.0.0.1:9999/todos/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

todoRouter.get("/", async (request:Request, response:Response) => {
    await todoController.getAllTodos(request,response);
})

/**
 * @uses : get todo
 * @url : http://127.0.0.1:9999/todos/:todoId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

todoRouter.get("/:todoId", async (request:Request, response:Response) => {
    await todoController.getTodo(request,response);
})

export default todoRouter;