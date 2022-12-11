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
    const [loading, setLoading] = useState(false);

    const addEmployeeHandle = (e: Employee) => {
        setLoading(true);
        addEmployee(e)
            .catch(e => console.error(JSON.stringify(e)))
            .finally(() => {
                setLoading(false);
                props.updateList();
            })
    }

    return (
        <Loader loading={loading} label='Saving'>
            {isHidden ? <AddEmployeeForm saveEmployee={addEmployeeHandle} hideForm={() => setIsHidden(false)} /> : <button onClick={() => { setIsHidden(!isHidden) }}>Add employee</button>}
        </Loader>
    )
}

export default AddEmployeeFormContainer;
