import mongoose from "mongoose";
import {IContact} from "../models/IContact";

const contactSchema = new mongoose.Schema<IContact>({
    userObj: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    name: {type: String, required: true},
    company: {type: String, required: true},
    email: {type: String, required: true},
    title: {type: String, required: true},
    mobile: {type: String, required: true},
    imageUrl: {type: String, required: true},
    groupId: {type: String, required: true}

}, {timestamps: true});

const ContactsTable = mongoose.model<IContact>("contacts", contactSchema);
export default ContactsTable;