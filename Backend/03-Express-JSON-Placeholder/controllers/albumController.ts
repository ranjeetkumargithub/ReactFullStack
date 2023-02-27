import { Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";
import { IAlbum } from "../models/IAlbum";

/**
 * @uses : get all albums
 * @url : http://127.0.0.1:9999/albums/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getAllAlbums = async (request:Request, response:Response) => {
    try{
        const filePath = path.join(__dirname, "..", "database", "albums.json");
        const albums:IAlbum[] = await jsonfile.readFile(filePath);
        response.status(200).json(albums);
    }
    catch(error){
        response.status(500).json({
            status : "FAILED",
            error : error
        });
    }
};

/**
 * @uses : get album
 * @url : http://127.0.0.1:9999/albums/:albumId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */
export const getAlbum = async (request:Request, response:Response) => {
    try{
        const {albumId} = request.params;
        const filePath = path.join(__dirname, "..", "database", "albums.json");
        const albums:IAlbum[] = await jsonfile.readFile(filePath);
        if(albumId){
            const album:IAlbum|undefined = albums.find(item => item.id.toString() === albumId);
            if(album){
                response.status(200).json(album);
            }
            else{
                response.status(404).json({msg : "No Album found"});
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