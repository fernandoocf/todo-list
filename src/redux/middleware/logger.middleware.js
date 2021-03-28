import {
    ADD_TODO_REQUEST,
    addTodoSuccess,
    DELETE_TODO_REQUEST,
    deleteTodoSUCCESS,
    LOAD_TODOS_REQUEST,
    loadTodosSuccess,
    UPDATE_TODO_REQUEST,
    updateTodoSUCCESS
} from "../actions";

export const loggerMiddleware = storeAPI => next => action => {
    switch (action.type) {
        case LOAD_TODOS_REQUEST:
            _loadAllTodoItems(next, action);
            return;
        case ADD_TODO_REQUEST:
            _addTodoItem(next, action);
            return;
        case DELETE_TODO_REQUEST:
            _deleteTodoItem(next, action);
            return;
        case UPDATE_TODO_REQUEST:
            _updateTodoItem(next, action)
            return;
        default:
            next(action);
            return;
    }
}

const _loadAllTodoItems = (next, action) => {
    fetch("https://605ab2ed27f0050017c05215.mockapi.io/todos", {method: "GET"})
        .then( response => {
            return response.json()
        }).then(todos => {
        next(loadTodosSuccess(todos));
    }, (error) => {
        alert(error);
        console.error(error);
    });
}

const _addTodoItem = (next, action) => {
    fetch("https://605ab2ed27f0050017c05215.mockapi.io/todos", {method: "POST", body: JSON.stringify(action.payload)})
        .then(reponse => {
            return reponse.json();
        }).then(todo => {
        next(addTodoSuccess(todo));
        alert("Item added with success!");
    });
}

const _deleteTodoItem = (next, action) => {
    fetch(`https://605ab2ed27f0050017c05215.mockapi.io/todos/${action.payload}`, {method: "DELETE"})
        .then(reponse => {
            return reponse.json();
        }).then(todo => {
        next(deleteTodoSUCCESS(todo.id));
        alert("Item removed with success!");
    });
}

const _updateTodoItem = (next, action) => {
    fetch(`https://605ab2ed27f0050017c05215.mockapi.io/todos/${action.payload.id}`, {method: "PUT", body: JSON.stringify(action.payload)})
        .then(reponse => {
            return reponse.json();
        }).then(todo => {
        next(updateTodoSUCCESS(todo));
        alert("Item updated with success!");
    });
}