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
            return _loadAllTodoItems(next, action);
        case ADD_TODO_REQUEST:
            return _addTodoItem(next, action);
        case DELETE_TODO_REQUEST:
            return _deleteTodoItem(next, action);
        case UPDATE_TODO_REQUEST:
            return _updateTodoItem(next, action)
        default:
            return next(action);
    }
}

const _loadAllTodoItems = (next, action) => {
    return fetch("https://605ab2ed27f0050017c05215.mockapi.io/todos", {method: "GET"})
        .then( response => {
            return response.json()
        })
        .then(todos => {
            const result = next(loadTodosSuccess(todos));
            return result;
        }, (error) => {
            alert(error);
            console.error(error);
        });
}

const _addTodoItem = (next, action) => {
    return fetch("https://605ab2ed27f0050017c05215.mockapi.io/todos", {method: "POST", body: JSON.stringify(action.payload)})
        .then(reponse => {
            return reponse.json();
        }).then(todo => {
            const result = next(addTodoSuccess(todo));
            alert("Item added with success!");
            return result;
        });
}

const _deleteTodoItem = (next, action) => {
    return fetch(`https://605ab2ed27f0050017c05215.mockapi.io/todos/${action.payload}`, {method: "DELETE"})
        .then(reponse => {
            return reponse.json();
        })
        .then(todo => {
            const result = next(deleteTodoSUCCESS(todo.id));
            alert("Item removed with success!");
            return result;
        });
}

const _updateTodoItem = (next, action) => {
    return fetch(`https://605ab2ed27f0050017c05215.mockapi.io/todos/${action.payload.id}`, {method: "PUT", body: JSON.stringify(action.payload)})
        .then(reponse => {
            return reponse.json();
        })
        .then(todo => {
            const result = next(updateTodoSUCCESS(todo));
            alert("Item updated with success!");
            return result;
        });
}