import express, { Request, Response, Router } from "express";
import * as photoController from "../controllers/photoController";

const photoRouter:Router = Router();

/**
 * @uses : get all photos
 * @url : http://127.0.0.1:9999/photos/
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

photoRouter.get("/", async (request:Request, response:Response) => {
    await photoController.getAllPhotos(request,response);
})

/**
 * @uses : get photo
 * @url : http://127.0.0.1:9999/photos/:photoId
 * @method : GET
 * @param : no-params
 * @access : PUBLIC
 */

photoRouter.get("/:photoId", async (request:Request, response:Response) => {
    await photoController.getPhoto(request,response);
})

export default photoRouter;