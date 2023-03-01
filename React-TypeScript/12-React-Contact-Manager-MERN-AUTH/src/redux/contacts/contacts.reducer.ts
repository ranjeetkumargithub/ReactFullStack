import {createSlice, isRejectedWithValue, SerializedError} from "@reduxjs/toolkit";
import {IContactView} from "../../modules/contacts/models/IContactView";
import {IGroupView} from "../../modules/contacts/models/IGroupView";
import * as contactActions from './contacts.actions';
import {ToastUtil} from "../../util/ToastUtil";

export const contactFeatureKey = "contactFeature";

export interface InitialState{
    loading : boolean;
    errorMessage : SerializedError;
    contacts : IContactView[];
    contact : IContactView;
    groups : IGroupView[];
    group : IGroupView;
}

const initialState:InitialState = {
    loading : false,
    errorMessage : {} as SerializedError,
    contacts : [] as IContactView[],
    contact : {} as IContactView,
    groups : [] as IGroupView[],
    group : {} as IGroupView
};

export const contactSlice = createSlice({
    name : "contactSlice",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {

        /**
         * Get all contacts
         */
        builder.addCase(contactActions.getAllContactsAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getAllContactsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contacts = action.payload;
        }).addCase(contactActions.getAllContactsAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Get all contact failed');
            }
        })

        /**
         * Get contact
         */
        builder.addCase(contactActions.getContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getContactAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contact = action.payload;
        }).addCase(contactActions.getContactAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Get contact failed');
            }
        })

        /**
         * Create contact
         */
        builder.addCase(contactActions.createContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.createContactAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contact = action.payload;
            ToastUtil.displaySuccessMessage('Contact is Created Successfully');
        }).addCase(contactActions.createContactAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Create contact is failed');
            }
        })

        /**
         * Update contact
         */
        builder.addCase(contactActions.updateContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.updateContactAction.fulfilled, (state, action) => {
            state.loading = false;
            state.contact = action.payload;
            ToastUtil.displaySuccessMessage('Update contact is Success');
        }).addCase(contactActions.updateContactAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Update contact is Failed');
            }
        })

        /**
         * delete contact
         */
        builder.addCase(contactActions.deleteContactAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.deleteContactAction.fulfilled, (state, action) => {
            state.loading = false;
            ToastUtil.displayInfoMessage('Delete contact is Success');
        }).addCase(contactActions.deleteContactAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Delete contact is Failed');
            }
        })

        /**
         * get all groups
         */
        builder.addCase(contactActions.getAllGroupsAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getAllGroupsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.groups = action.payload;
        }).addCase(contactActions.getAllGroupsAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Get all groups is Failed');
            }
        })

        /**
         * get Group
         */
        builder.addCase(contactActions.getGroupAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(contactActions.getGroupAction.fulfilled, (state, action) => {
            state.loading = false;
            state.group = action.payload;
        }).addCase(contactActions.getGroupAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload;
                ToastUtil.displayErrorMessage('Get group is Failed');
            }
        })
    }
});


















