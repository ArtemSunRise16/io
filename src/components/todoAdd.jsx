import React from "react";
import '../style/todoAdd.css'

function TodoAdd() {
    return (
        <div className="todo__new">
            <input type="text" placeholder="Add a new tasks"></input>
            <div className="todo__add">+</div>
        </div>
    )
}

export default TodoAdd