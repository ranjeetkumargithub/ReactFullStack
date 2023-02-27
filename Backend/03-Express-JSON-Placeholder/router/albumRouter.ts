import express, { Request, Response, Router } from "express";
import * as albumController from "../controllers/albumController";

const albumRouter:Router = Router();

/**
 * @uses : get all albums
 * @url : http://127.0.0.1:9999/albums/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

albumRouter.get("/", async (request:Request, response:Response) => {
    await albumController.getAllAlbums(request,response);
})

/**
 * @uses : get album
 * @url : http://127.0.0.1:9999/albums/:albumId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

albumRouter.get("/:albumId", async (request:Request, response:Response) => {
    await albumController.getAlbum(request,response);
})

export default albumRouter;