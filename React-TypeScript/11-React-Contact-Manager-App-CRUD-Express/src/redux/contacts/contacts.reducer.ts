import { createSlice, isRejectedWithValue, SerializedError } from "@reduxjs/toolkit";
import { IContact } from "../../modules/contacts/models/IContact";
import { IGroup } from "../../modules/contacts/models/IGroup";
import { ToastUtil } from "../../util/ToastUtil";
import * as contactActions from "./contacts.action";

export const contactFeatureKey = "contactFeature";

export interface InitialState{
    loading : boolean;
    errorMessage : SerializedError;
    contacts : IContact[];
    contact : IContact;
    groups : IGroup[];
    group : IGroup;
}

const initialState:InitialState = {
    loading : false,
    errorMessage : {} as SerializedError,
    contacts : [] as IContact[],
    contact : {} as IContact,
    groups : [] as IGroup[],
    group : {} as IGroup
};

export const contactSlice = createSlice({
    name : "contactSlice",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        
        /**
         * get all contacts
         */
        builder.addCase(contactActions.getAllContactsAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getAllContactsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contacts = action.payload;
        }).addCase(contactActions.getAllContactsAction.rejected, (state, action) => {
            state.loading = false;
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage("Get all contact failed")
            }
        })

        /**
         * get contact
         */
        builder.addCase(contactActions.getContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getContactAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contact = action.payload;
        }).addCase(contactActions.getContactAction.rejected, (state, action) => {
            state.loading = false;
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage("Get contact failed")
            }
        })

        /**
         * create contact
         */
        builder.addCase(contactActions.createContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.createContactAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contact = action.payload;
            ToastUtil.displaySuccessMessage("Contact is created successfully");
        }).addCase(contactActions.createContactAction.rejected, (state, action) => {
            state.loading = false;
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage("Create contact is failed");
            }
        })

        /**
         * update contact
         */
        builder.addCase(contactActions.updateContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.updateContactAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contact = action.payload;
            ToastUtil.displaySuccessMessage("Updateed successfully");
        }).addCase(contactActions.updateContactAction.rejected, (state, action) => {
            state.loading = false;
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage("Update contact is failed");
            }
        })

        /**
         * delete contact
         */
        builder.addCase(contactActions.deleteContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.deleteContactAction.fulfilled, (state, action) => {
            state.loading = false;
            ToastUtil.displayInfoMessage("Deleted successfully");
        }).addCase(contactActions.deleteContactAction.rejected, (state, action) => {
            state.loading = false;
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage("Delete contact is failed");
            }
        })

        /**
         * get all groups
         */
        builder.addCase(contactActions.getAllGroupAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getAllGroupAction.fulfilled, (state, action) => {
            state.loading = false;
            state.groups = action.payload;
        }).addCase(contactActions.getAllGroupAction.rejected, (state, action) => {
            state.loading = false;
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage("Get all group is failed");
            }
        })

        /**
         * get group
         */
        builder.addCase(contactActions.getGroupAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getGroupAction.fulfilled, (state, action) => {
            state.loading = false;
            state.group = action.payload;
        }).addCase(contactActions.getGroupAction.rejected, (state, action) => {
            state.loading = false;
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage("Get group is failed");
            }
        })
    }
});