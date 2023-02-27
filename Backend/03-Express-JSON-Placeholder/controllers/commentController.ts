import { Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";
import { IComment } from "../models/IComment";

const filePath = path.join(__dirname, "..", "database", "comments.json");

/**
 * @uses : get all comments
 * @url : http://127.0.0.1:9999/comments/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getAllComments = async (request:Request, response:Response) => {
    try{
        const comments:IComment[] = await jsonfile.readFile(filePath);
        response.status(200).json(comments);
    }
    catch(error){
        response.status(500).json({
            status : "FAILED",
            error : error
        });
    }
};

/**
 * @uses : get comment
 * @url : http://127.0.0.1:9999/comments/:commentId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getComment = async (request:Request, response:Response) => {
    try{
        const {commentId} = request.params;
        const comments:IComment[] = await jsonfile.readFile(filePath);
        if(commentId){
            const comment:IComment|undefined = comments.find(item => item.id.toString() === commentId);
            if(comment){
                response.status(200).json(comment);
            }
            else{
                response.status(404).json({msg : "No comment found"});
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