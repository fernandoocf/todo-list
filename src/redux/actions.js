export const LOAD_TODOS_REQUEST = "LOAD_TODOS_REQUEST";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

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



export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}