import { Employee } from "../model/Employee";
import { Key } from "react";
import { response } from "msw";

const BASE_URL = 'http://localhost:3001';

export const getEmployees = async () => {
    return fetch(`${BASE_URL}/employees`)
        .then(response => {
            if (response.ok)
                return response.json();
            else throw response;
        })
}

export const addEmployee = async (employee: Employee) => {

}

export const deleteEmployee = async (employeeId: Key) => {

}