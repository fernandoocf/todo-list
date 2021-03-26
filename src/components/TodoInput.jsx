import React from "react";

function TodoInput() {
    return (
        <div>
            <div className='row'>
                <input type="text" className="col form-control"/>
                <button className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default TodoInput;