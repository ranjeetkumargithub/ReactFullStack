import axios from "axios";
import { IUser } from "../modes/IUser";

export class UserService{
    private static serviceUrl = "https://jsonplaceholder.typicode.com";

    public static getAllUsers():Promise<{data : IUser[]}>{
         let dataUrl:string = `${this.serviceUrl}/users`;
         return axios.get(dataUrl);
    }
}