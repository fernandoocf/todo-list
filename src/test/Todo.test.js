import React from "react";
import {cleanup, screen, waitFor, fireEvent} from "@testing-library/react";
import TodoInput from "../components/TodoInput";
import {render} from "./utils"
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import App from "../App";
import {
    ADD_TODO_REQUEST,
    addTodoRequest, DELETE_TODO_REQUEST,
    deleteTodoRequest,
    LOAD_TODOS_REQUEST,
    loadTodosRequest, UPDATE_TODO_REQUEST, updateTodoRequest
} from "../redux/actions";

afterEach(cleanup);

describe("Tests for TodoInput component", () => {
    //Rendering Tests
    it("Should render TodoInput component", () => {
        render(<TodoInput />)
    });
    it("Should render TodoItem component", () => {
        const mockedTodo = {id:999, name:'testTodo'}
        render(<TodoItem todo={mockedTodo} />)
    });
    it("Should render TodoList component", () => {
        render(<TodoList />)
    });
    it("Should render App component", () => {
        render(<App />)
    });


    //Behavior Tests
    it("Should load todo items", async () => {
        const mockedDispatch = jest.fn(loadTodosRequest);
        render(<TodoList />, {mockedDispatch});
        await waitFor(() => expect(mockedDispatch).toHaveBeenCalledTimes(1))
        expect(mockedDispatch).toHaveBeenCalledWith({type: LOAD_TODOS_REQUEST});
    });

    it("Should add a new task to the list", async () => {
        const mockedDispatch = jest.fn(addTodoRequest);
        render(<TodoInput />, {mockedDispatch});
        const inputField = screen.getByTestId('input-field');
        const inputBtn = screen.getByTestId('input-btn');
        const newTodo = "New Todo Item";

        fireEvent.change(
            inputField,
            {target: {value: newTodo}});
        expect(inputField.value).toEqual(newTodo);

        fireEvent.click(inputBtn);
        await waitFor(() => expect(mockedDispatch).toHaveBeenCalledTimes(1))
        expect(mockedDispatch).toHaveBeenCalledWith({type: ADD_TODO_REQUEST, payload: {name: newTodo}});
    });

    it("Should delete a new task to the list", async () => {
        const mockedDispatch = jest.fn(deleteTodoRequest);
        const mockedTodo = {id:999, name:'testTodo'}
        render(<TodoItem todo={mockedTodo} />, {mockedDispatch})
        const deleteBtn = screen.getByTestId('delete-btn');

        fireEvent.click(deleteBtn);
        await waitFor(() => expect(mockedDispatch).toHaveBeenCalledTimes(1))
        expect(mockedDispatch).toHaveBeenCalledWith({type: DELETE_TODO_REQUEST, payload: mockedTodo.id});
    });

    it("Should update a new task to the list", async () => {
        const mockedDispatch = jest.fn(updateTodoRequest);
        const mockedTodo = {id:999, name:'testTodo'}
        render(<TodoItem todo={mockedTodo} />, {mockedDispatch})
        const updateBtn = screen.getByTestId('update-btn');

        fireEvent.click(updateBtn);

        const inputEditable = screen.getByTestId('input-editable');
        const editedTodo = {id: 999, name:"Edited Todo Item"};

        fireEvent.change(
            inputEditable,
            {target: {value: editedTodo.name}});
        expect(inputEditable.value).toEqual(editedTodo.name);
        fireEvent.click(updateBtn);

        await waitFor(() => expect(mockedDispatch).toHaveBeenCalledTimes(1))
        expect(mockedDispatch).toHaveBeenCalledWith({type: UPDATE_TODO_REQUEST, payload: editedTodo});
    });
});