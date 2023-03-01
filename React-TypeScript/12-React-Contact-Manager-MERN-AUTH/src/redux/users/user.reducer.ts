import {createSlice, isRejectedWithValue, SerializedError} from "@reduxjs/toolkit";
import {ToastUtil} from "../../util/ToastUtil";
import {IUserView} from "../../modules/users/models/IUserView";
import * as userActions from "./user.actions";
import {TokenUtil} from "../../util/TokenUtil";

export const userFeatureKey = "userFeature";

export interface InitialState {
    loading: boolean;
    errorMessage: SerializedError;
    user: IUserView;
    token: string;
    isAuthenticated: boolean;
}

const initialState: InitialState = {
    loading: false,
    errorMessage: {} as SerializedError,
    user: {} as IUserView,
    token: "",
    isAuthenticated: false
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        logOffAction: (state, action) => {
            state.user = {} as IUserView;
            state.token = "";
            state.isAuthenticated = false;
            TokenUtil.deleteTokenFromSession();
            ToastUtil.displaySuccessMessage("LogOff is Success!");
        }
    },
    extraReducers: (builder) => {
        // Register a user
        builder.addCase(userActions.registerUserAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.registerUserAction.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload.msg);
            console.log(action.payload.data);
            ToastUtil.displaySuccessMessage(action.payload.msg);
        }).addCase(userActions.registerUserAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Registration is Failed');
            }
        })

        // login user
        builder.addCase(userActions.loginUserAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.loginUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            TokenUtil.saveTokenToSession(action.payload.token);
            ToastUtil.displaySuccessMessage(action.payload.msg);
        }).addCase(userActions.loginUserAction.rejected, (state, action) => {
            state.loading = false;
            state.user = {} as IUserView;
            state.token = "";
            state.isAuthenticated = false;
            TokenUtil.deleteTokenFromSession();
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Login is Failed');
            }
        })

        // get user info
        builder.addCase(userActions.getUserInfoAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.getUserInfoAction.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            state.isAuthenticated = true;
        }).addCase(userActions.getUserInfoAction.rejected, (state, action) => {
            state.loading = false;
            state.user = {} as IUserView;
            state.isAuthenticated = false;
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
                ToastUtil.displayErrorMessage('Get User Info Failed');
            }
        })
    }
});
export const {logOffAction} = userSlice.actions;