import axios from "axios";
import {IUserView} from "../models/IUserView";

export class UserService {
    private static serverUrl: string = process.env.REACT_APP_EXPRESS_SERVER_URL ? process.env.REACT_APP_EXPRESS_SERVER_URL : "";

    /**
     * @usage : Register a User
     * @method : POST
     * @url : http://localhost:9000/users/register
     * @access : PUBLIC
     * @body : username, email, password
     * @param user
     */
    public static registerUser(user: IUserView): Promise<{ data: { msg: string, data: IUserView } }> {
        const dataUrl: string = `${this.serverUrl}/users/register`;
        return axios.post(dataUrl, user);
    }

    /**
     * @usage : Login a User
     * @method : POST
     * @url : http://localhost:9000/users/login
     * @access : PUBLIC
     * @body : email, password
     * @param user
     */
    public static loginUser(user: IUserView): Promise<{ data: { msg: string, data: IUserView, token: string } }> {
        const dataUrl: string = `${this.serverUrl}/users/login`;
        return axios.post(dataUrl, user);
    }

    /**
     * @usage : get User Info
     * @method : GET
     * @url : http://localhost:9000/users/me
     * @access : PRIVATE
     */
    public static getUserInfo(): Promise<{ data: { data: IUserView } }> {
        const dataUrl: string = `${this.serverUrl}/users/me`;
        return axios.get(dataUrl);
    }
}