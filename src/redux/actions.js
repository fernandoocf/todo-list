export const LOAD_TODOS_REQUEST = "LOAD_TODOS_REQUEST";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";

export function loadTodosRequest() {
    return {
        type: LOAD_TODOS_REQUEST
    }
}

export function loadTodosSuccess(todo) {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: todo
    }
}

export function addTodoRequest(todo) {
    return {
        type: ADD_TODO_REQUEST,
        payload: todo
    }
}

export function addTodoSuccess(todo) {
    return {
        type: ADD_TODO_SUCCESS,
        payload: todo
    }
}

export function deleteTodoRequest(todoId) {
    return {
        type: DELETE_TODO_REQUEST,
        payload: todoId
    }
}

export function deleteTodoSUCCESS(todoId) {
    return {
        type: DELETE_TODO_SUCCESS,
        payload: todoId
    }
}

export function updateTodoRequest(todo) {
    return {
        type: UPDATE_TODO_REQUEST,
        payload: todo
    }
}

export function updateTodoSUCCESS(todo) {
    return {
        type: UPDATE_TODO_SUCCESS,
        payload: todo
    }
}