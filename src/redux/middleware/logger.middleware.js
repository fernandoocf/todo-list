import {ADD_TODO_REQUEST, addTodoSuccess, LOAD_TODOS_REQUEST, loadTodosSuccess} from "../actions";

export const loggerMiddleware = storeAPI => next => action => {
    if(action.type === LOAD_TODOS_REQUEST) {
        fetch("https://605ab2ed27f0050017c05215.mockapi.io/todos", {method: "GET"})
            .then( response => {
                return response.json()
        }).then(todos => {
            next(loadTodosSuccess(todos));
        }, (error) => {
           alert(error);
           console.error(error);
        });
        return;
    }
    if(action.type === ADD_TODO_REQUEST) {
        fetch("https://605ab2ed27f0050017c05215.mockapi.io/todos", {method: "POST", body: JSON.stringify(action.payload)})
            .then(reponse => {
                return reponse.json();
            }).then(todo => {
                next(addTodoSuccess(todo));
                alert("Item added with success!");
        })
    }
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
}