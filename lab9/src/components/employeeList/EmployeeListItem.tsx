import React, { useState } from 'react';
import { Employee } from "../../model/Employee";
import { deleteEmployee } from "../../logic/api";
import Loader from "../utils/Loader";

export interface EmployeeListItemProps {
    employee: Employee;
    updateList: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = (props: EmployeeListItemProps) => {
    const [loading, setLoading] = useState(false);

    const deleteHandler = () => {
        setLoading(true);
        deleteEmployee(props.employee.id)
            .catch(e => console.error(JSON.stringify(e)))
            .finally(() => {
                setLoading(false);
                props.updateList();
            })
    }
    return (
        <Loader loading={loading} label="Deleting">
            <div>
                    <span>{props.employee.id}. </span>
                    <span>{props.employee.name}</span>
                    <button onClick={deleteHandler}>Delete</button>
            </div>
        </Loader>
    );
}

export default EmployeeListItem;
