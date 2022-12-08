import React, { useState } from 'react';
import AddEmployeeForm from "./AddEmployeeForm";
import { Employee } from "../../../model/Employee";
import { addEmployee } from "../../../logic/api";
import Loader from "../../utils/Loader";

export interface AddEmployeeProps {
    updateList: () => void;
}

const AddEmployeeFormContainer: React.FC<AddEmployeeProps> = (props: AddEmployeeProps) => {

    const [isHidden, setIsHidden] = useState(false);

    return (
        <>
        {isHidden ? <AddEmployeeForm saveEmployee={()=>{}} hideForm={()=>{setIsHidden(true)}}/> : <button onClick={()=>{setIsHidden(!isHidden)}}>Add employee</button>}
        </>
    )
}

export default AddEmployeeFormContainer;
