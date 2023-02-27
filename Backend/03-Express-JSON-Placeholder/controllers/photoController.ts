import { Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";
import { IPhoto } from "../models/IPhoto";

const filePath = path.join(__dirname, "..", "database", "photos.json");

/**
 * @uses : get all photos
 * @url : http://127.0.0.1:9999/photos/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getAllPhotos = async (request:Request, response:Response) => {
    try{
        const photos:IPhoto[] = await jsonfile.readFile(filePath);
        response.status(200).json(photos);
    }
    catch(error){
        response.status(500).json({
            status : "FAILED",
            error : error
        });
    }
};

/**
 * @uses : get photo
 * @url : http://127.0.0.1:9999/photos/:photoId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getPhoto = async (request:Request, response:Response) => {
    try{
        const {photoId} = request.params;
        const photos:IPhoto[] = await jsonfile.readFile(filePath);
        if(photoId){
            const photo:IPhoto|undefined = photos.find(item => item.id.toString() === photoId);
            if(photo){
                response.status(200).json(photo);
            }
            else{
                response.status(404).json({msg : "No photo found"});
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