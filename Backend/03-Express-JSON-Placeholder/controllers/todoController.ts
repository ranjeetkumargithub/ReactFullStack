import { Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";
import { ITodo } from "../models/ITodo";

const filePath = path.join(__dirname, "..", "database", "todos.json");

/**
 * @uses : get all todos
 * @url : http://127.0.0.1:9999/todos/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getAllTodos = async (request:Request, response:Response) => {
    try{
        const todos:ITodo[] = await jsonfile.readFile(filePath);
        response.status(200).json(todos);
    }
    catch(error){
        response.status(500).json({
            status : "FAILED",
            error : error
        });
    }
};

/**
 * @uses : get todo
 * @url : http://127.0.0.1:9999/todos/:todoId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getTodo = async (request:Request, response:Response) => {
    try{
        const {todoId} = request.params;
        const todos:ITodo[] = await jsonfile.readFile(filePath);
        if(todoId){
            const todo:ITodo|undefined = todos.find(item => item.id.toString() === todoId);
            if(todo){
                response.status(200).json(todo);
            }
            else{
                response.status(404).json({msg : "No todo found"});
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