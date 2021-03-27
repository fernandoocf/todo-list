import React, {useState} from "react";
import {addTodo} from '../redux/actions';
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
                        dispatch(addTodo({id: Math.floor(Math.random() * 20), name: name}))
                            setName('')
                    }}>Add</button>
            </div>
        </div>
    )
}

export default TodoInput;