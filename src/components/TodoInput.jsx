import React, {useState} from "react";
import {addTodoRequest} from '../redux/actions';
import {useDispatch} from "react-redux";

function TodoInput() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <div className='row'>
                <input
                    type="text"
                    className="col form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}/>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        if (name) {
                            dispatch(
                                addTodoRequest(
                                    { name: name
                                    }))
                            setName('')
                        } else {
                            alert("The input needs to be filled!");
                        }
                    }}>Add</button>
            </div>
        </div>
    )
}

export default TodoInput;