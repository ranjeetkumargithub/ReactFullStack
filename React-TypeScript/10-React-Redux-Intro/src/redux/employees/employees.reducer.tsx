import { createSlice } from "@reduxjs/toolkit";
import { IEmployee } from "../../models/IEmployee";
import { EmployeeService } from "../../services/EmployeeService";

export const employeeFeatureKey = "employeeFeature";

export interface InitialState{
    employees : IEmployee[]
}

const initialState:InitialState = {
    employees : EmployeeService.getAllEmployees()
};

export const employeeSlice = createSlice({
    name : "employeeSlice",
    initialState : initialState,
    reducers : {
        selectCheckAction : (state, action) => {
            const {empId} = action.payload
            let selectedEmployees = state.employees.map(employee => {
                if(employee.id === empId){
                    return{
                        ...employee,
                        isSelected : !employee.isSelected
                    }
                }
                else{
                    return employee;
                }
            });
            state.employees = selectedEmployees;  // update to the state
        }
    }
})
export const {selectCheckAction} = employeeSlice.actions;