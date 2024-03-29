import mongoose from "mongoose";
import {IGroup} from "../models/IGroup";
import {IContact} from "../models/IContact";
import {IUser} from "../models/IUser";

const userSchema = new mongoose.Schema<IUser>({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    imageUrl: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false}
}, {timestamps: true});

const UsersTable = mongoose.model<IUser>("users", userSchema);
export default UsersTable;