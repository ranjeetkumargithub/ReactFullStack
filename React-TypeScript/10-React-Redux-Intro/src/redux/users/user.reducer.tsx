import { createSlice, isRejectedWithValue, SerializedError } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import * as userAction from "./user.action";

export const userFeatureKey = "userFeature";

export interface InitialState{
    loading : boolean;
    users : IUser[];
    errorMessage : SerializedError;
}
const initialState:InitialState = {
    loading : false,
    users : [] as IUser[],
    errorMessage : {} as SerializedError
};

export const userSlice = createSlice({
    name : "UserSlice",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        /**
         *  get all users from server
         */
        builder.addCase(userAction.getAllUsersAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userAction.getAllUsersAction.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }).addCase(userAction.getAllUsersAction.rejected, (state, action) => {
            state.loading = false;
            state.users = [] as IUser[];
            if(isRejectedWithValue(action)){
                state.errorMessage = action.payload
            }
        })
    }
})