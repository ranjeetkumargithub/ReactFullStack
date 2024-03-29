import {Response, Router, Request} from "express";
import * as contactController from "../controllers/contactController";
import {body} from 'express-validator';
import {authMiddleware} from "../middlewares/authMiddleware";

const contactRoutes: Router = Router();

/**
 * @usage : Get all contacts
 * @method : GET
 * @url : http://localhost:9000/contacts/
 * @param : No-params
 * @access : PRIVATE
 */
contactRoutes.get('/', authMiddleware, async (request: Request, response: Response) => {
    await contactController.getAllContacts(request, response);
})

/**
 * @usage : Get contact
 * @method : GET
 * @url : http://localhost:9000/contacts/:contactId
 * @param : No-params
 * @access : PRIVATE
 */
contactRoutes.get('/:contactId', authMiddleware, async (request: Request, response: Response) => {
    await contactController.getContact(request, response);
})

/**
 * @usage : Create a contact
 * @method : POST
 * @url : http://localhost:9000/contacts/
 * @param : name , imageUrl, mobile, email, company, title, groupId
 * @access : PRIVATE
 */
contactRoutes.post('/', authMiddleware, [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('imageUrl').not().isEmpty().withMessage('imageUrl is required'),
    body('mobile').not().isEmpty().withMessage('mobile is required'),
    body('email').isEmail().withMessage('proper Email is required'),
    body('company').not().isEmpty().withMessage('company is required'),
    body('title').not().isEmpty().withMessage('title is required'),
    body('groupId').not().isEmpty().withMessage('groupId is required'),
], async (request: Request, response: Response) => {
    await contactController.createContact(request, response);
})

/**
 * @usage : Update the contact
 * @method : PUT
 * @url : http://localhost:9000/contacts/:contactId
 * @param : name , imageUrl, mobile, email, company, title, groupId
 * @access : PRIVATE
 */
contactRoutes.put('/:contactId', authMiddleware, [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('imageUrl').not().isEmpty().withMessage('imageUrl is required'),
    body('mobile').not().isEmpty().withMessage('mobile is required'),
    body('email').isEmail().withMessage('proper Email is required'),
    body('company').not().isEmpty().withMessage('company is required'),
    body('title').not().isEmpty().withMessage('title is required'),
    body('groupId').not().isEmpty().withMessage('groupId is required'),
], async (request: Request, response: Response) => {
    await contactController.updateContact(request, response);
})

/**
 * @usage : Delete a contact
 * @method : DELETE
 * @url : http://localhost:9000/contacts/:contactId
 * @param : no-params
 * @access : PRIVATE
 */
contactRoutes.delete('/:contactId', authMiddleware, async (request: Request, response: Response) => {
    await contactController.deleteContact(request, response);
})


export default contactRoutes;