// noinspection DuplicatedCode

import {fireEvent, render, screen} from "@testing-library/react";
import AddEmployeeFormContainer from "../components/employeeList/addEmployeeForm/AddEmployeeFormContainer";
import React from "react";
import {setupServer} from "msw/node";
import {rest} from "msw";
import EmployeeListItem from "../components/employeeList/EmployeeListItem";

/*
getBy - finds or throws error - for standard use
queryBy - finds or returns null - used to verify that something is not there
findBy - async, finds or throws
*/

const noAction = () => {
}

//region server mock
const server = setupServer(
    rest.delete('*/employees/:id', async (request, response, ctx) => {
        return response(ctx.json({}));
    })
);
//endregion

beforeAll(() => server.listen());
afterEach(() => {
    server.resetHandlers();
    jest.clearAllMocks();
});
afterAll(() => server.close());

//region method mocks
jest.spyOn(console, 'error');
//endregion

describe('EmployeeListItem delete test', () => {
    test('EmployeeListItem should show \'Deleting\' label when clicked', () => {
        render(<EmployeeListItem employee={{id: "test123", isActive: false, name: "delete test" }} updateList={noAction}/>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText("Deleting...")).toBeTruthy();
    });

    test('AddEmployeeFormContainer should call update after having loaded', async () => {
        const updateList = jest.fn();
        render(<EmployeeListItem employee={{id: "test123", isActive: false, name: "delete test" }} updateList={updateList}/>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(await screen.findByText("Delete")).toBeTruthy();

        expect(updateList).toHaveBeenCalled();
    });
});

describe('EmployeeListItem error handling test', () => {
    const changeServerToThrowError = () => {
        server.use(
            rest.delete('*/employees/:id', (request, response, ctx) => {
                return response(
                    ctx.status(500),
                    ctx.json({
                        errorCode: 1,
                        errorMessage: 'Internal error',
                    })
                )
            })
        );
    }

    test('EmployeeListItem should log the error status code on error', async () => {
        changeServerToThrowError();
        expect((console.error as any).mock.calls.length).toBe(0);
        render(<EmployeeListItem employee={{id: "test123", isActive: false, name: "delete test" }} updateList={noAction}/>);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(await screen.findByText("Delete")).toBeTruthy();
        expect((console.error as any).mock.calls.length).toBe(1);
        expect((console.error as any).mock.calls[0][0]).toContain("Error");

        expect((console.error as any).mock.calls[0][0]).toContain("500");
    });
});
