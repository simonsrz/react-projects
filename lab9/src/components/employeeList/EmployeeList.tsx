import React, { useEffect, useState } from 'react';
import { getEmployees } from "../../logic/api";
import EmployeeListItem from "./EmployeeListItem";
import { Employee } from "../../model/Employee";
import Loader from "../utils/Loader";
import AddEmployeeFormContainer from './addEmployeeForm/AddEmployeeFormContainer';

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getEmployees()
            .then(employees => setEmployees(employees))
            .catch(e => console.error(JSON.stringify(e)))
            .finally(() => setLoading(false))
    }, [])
    return (
        <Loader loading={loading}>
            <h1>Employee list</h1>
            {employees.map(employee => <EmployeeListItem employee={employee} updateList={() => { }} />)}
            <AddEmployeeFormContainer updateList={() => { }} />
        </Loader>
    );
}
export default EmployeeList;
