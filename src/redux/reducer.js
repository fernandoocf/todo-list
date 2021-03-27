import {ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS, LOAD_TODOS_SUCCESS, UPDATE_TODO_SUCCESS} from "./actions";

export const reducer = (state = [], action) => {
    let newTodos;
    switch (action.type) {
        case LOAD_TODOS_SUCCESS:
            return action.payload;
        case ADD_TODO_SUCCESS:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO_SUCCESS:
            newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
        case UPDATE_TODO_SUCCESS:
            newTodos = [...state];
            let index = -1;
            for(let i = 0; i < newTodos.length; i++) {
                index++
                if (newTodos[i].id === action.payload.id) {
                    break
                }
            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
    }
    return state;
}