// noinspection DuplicatedCode

import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import EmployeeListItem from "./EmployeeListItem";
import { Employee } from "../../model/Employee";

/*
getBy - finds or throws error - for standard use
queryBy - finds or returns null - used to verify that something is not there
findBy - async, finds or throws
*/

describe('EmployeeListItem data visualization test', () => {
    const employee: Employee = {
        id: 'super-cool-id',
        name: 'Bob Marley',
        isActive: true
    };

    const noop = () => { }

    test('Component shows name of the employee', () => {

        render(<EmployeeListItem employee={employee} updateList={noop} />)

        expect(screen.getByText('Bob Marley')).toBeTruthy()
    });

    test('EmployeeListItem renders a delete button', async () => {
        render(<EmployeeListItem employee={employee} updateList={noop} />)
        expect(screen.getByRole("button")).toBeTruthy()
    });

    test('EmployeeListItem renders a button with "Delete" label', async () => {
        render(<EmployeeListItem employee={employee} updateList={noop} />)
        expect(screen.getByText("Delete")).toBeTruthy();
    });
})

describe('EmployeeListItem button test', () => {
    const employee: Employee = {
        id: 'super-cool-id',
        name: 'Bob Marley',
        isActive: true
    };

    const noop = () => { }

    test('Delete button should print "Deleting..." info', async () => {
        render(<EmployeeListItem employee={employee} updateList={noop} />)
        const delButton = screen.getByRole("button");
        fireEvent.click(delButton);
        expect(screen.queryByText("Deleting...")).toBeTruthy();
    });
});
