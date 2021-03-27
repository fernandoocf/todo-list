import React, {useEffect} from "react";
import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {loadTodosRequest} from "../redux/actions";

function TodoList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            loadTodosRequest()
        )
    }, [])
    const todos = useSelector(state => state);
    return (
        <div>
            {
                todos.map(todo => {
                   return <TodoItem key={todo.id} todo={todo} />
                })
            }
        </div>
    )
}

export default TodoList;