import { IRandomUser } from "../models/IRandomUserData";

export class UserUtil{
    public static getAllMaleUsers(users:IRandomUser[]):IRandomUser[]{
        return users.filter(user => user.gender.toLowerCase().trim() === "male");
    }

    public static getAllFemaleUsers(users:IRandomUser[]):IRandomUser[]{
        return users.filter(user => user.gender.toLowerCase().trim() === "female");
    }
}