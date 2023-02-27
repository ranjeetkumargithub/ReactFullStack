import { Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";
import { IPost } from "../models/IPost";

const filePath = path.join(__dirname, "..", "database", "posts.json");

/**
 * @uses : get all posts
 * @url : http://127.0.0.1:9999/posts/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getAllPosts = async (request:Request, response:Response) => {
    try{
        const posts:IPost[] = await jsonfile.readFile(filePath);
        response.status(200).json(posts);
    }
    catch(error){
        response.status(500).json({
            status : "FAILED",
            error : error
        });
    }
};

/**
 * @uses : get post
 * @url : http://127.0.0.1:9999/posts/:postId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getPost = async (request:Request, response:Response) => {
    try{
        const {postId} = request.params;
        const posts:IPost[] = await jsonfile.readFile(filePath);
        if(postId){
            const post:IPost|undefined = posts.find(item => item.id.toString() === postId);
            if(post){
                response.status(200).json(post);
            }
            else{
                response.status(404).json({msg : "No post found"});
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