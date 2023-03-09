import React, { ChangeEventHandler, useState } from 'react';
import { generateKey } from "../../../utils/generateKey";
import { Employee } from "../../../model/Employee";

export interface AddEmployeeFormProps {
    saveEmployee: (employee: Employee) => void;
    hideForm: () => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = (props: AddEmployeeFormProps) => {
    const [newEmployeeName, setNewEmployeeName] = useState("");

    const employeeHandling: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewEmployeeName(e.target.value);
    }

    const saveHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        props.saveEmployee({id: generateKey(), isActive: true, name: newEmployeeName});
        e.preventDefault();
    }

    return (
        <form onSubmit={saveHandle}>
            <input onChange={employeeHandling} type='text' />
            <button onClick={props.hideForm}>Cancel</button>
            <button type='submit'>Save</button>
        </form>
    )
}

export default AddEmployeeForm;
