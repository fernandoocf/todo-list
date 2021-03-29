import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodoRequest, updateTodoRequest} from '../redux/actions';

function TodoItem({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState('');
    const dispatch = useDispatch(todo.name);
    return (
        <div>
            <div data-testid="todo-item" className="row mx-2 align-items-center mt-5">
                <div>#{todo.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text"
                               data-testid="input-editable"
                               className="form-control"
                               placeholder={todo.name}
                               value={name}
                               onChange={(e) => setName(e.target.value)} />
                        : <h4>{todo.name}</h4>}
                </div>
                <button
                    data-testid="update-btn"
                    className={`m-2 btn ${editable ? "btn-success" : "btn-warning"} `}
                    onClick={() => {
                        if (editable) {
                            dispatch(updateTodoRequest(
                                {
                                    ...todo,
                                    name: name
                                }
                            ))
                            setName(todo.name);
                        }
                        setEditable(!editable);
                    }}>{editable ? "Update" : "Edit"}</button>
                <button data-testid="delete-btn" className="btn btn-danger m-2"  onClick={() => dispatch(deleteTodoRequest(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;