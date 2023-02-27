import {combineReducers} from "@reduxjs/toolkit";
import * as contactReducer from "./contacts/contacts.reducer";

const rootReducer: any = combineReducers({
    [contactReducer.contactFeatureKey] : contactReducer.contactSlice.reducer
});
export default rootReducer;