import {Response, Router, Request} from "express";
import * as userController from "../controllers/userController";
import {body} from 'express-validator';
import {authMiddleware} from "../middlewares/authMiddleware";

const userRoutes: Router = Router();

/**
 * @usage : Register a User
 * @method : POST
 * @url : http://localhost:9000/users/register
 * @access : PUBLIC
 * @param : username, email, password
 * @param request
 * @param response
 */
userRoutes.post('/register', [
    body('username').isLength({min: 5}).withMessage("Username is required"),
    body('email').isEmail().withMessage("Proper Email is required"),
    body('password').isStrongPassword().withMessage("Strong Password is required")
], async (request: Request, response: Response) => {
    await userController.registerUser(request, response);
});

/**
 * @usage : Login a User
 * @method : POSt
 * @url : http://localhost:9000/users/login
 * @access : PUBLIC
 * @param : email, password
 * @param request
 * @param response
 */
userRoutes.post('/login', [
    body('email').isEmail().withMessage("Proper Email is required"),
    body('password').isStrongPassword().withMessage("Strong Password is required")
], async (request: Request, response: Response) => {
    await userController.loginUser(request, response);
});

/**
 * @usage : get User Info
 * @method : GET
 * @url : http://localhost:9000/users/me
 * @access : PRIVATE
 * @param : no-params
 * @param request
 * @param response
 */
userRoutes.get('/me', authMiddleware, async (request: Request, response: Response) => {
    await userController.getUserInfo(request, response);
});

export default userRoutes;

