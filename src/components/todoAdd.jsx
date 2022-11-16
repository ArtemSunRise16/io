import React, { useState } from "react";
import '../style/todoAdd.css'

function TodoAdd({ todos, createTodo }) {

    const [title, setTitle] = useState('')

    const onChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    function addNewTodo() {
        const d = new Date()

        const newTodo = {
            title,
            id: Date.now(),
            completed: false,
            date: `${[d.getDate(),
                    d.getMonth(),
                    d.getFullYear()].join('/')}
                ${[d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join('-')}`,
            dateForSort: d.getTime()
        }
        createTodo(newTodo)
        setTitle('')
    }

    return (
        <div className="todo__new">
            <input type="text" placeholder="Add a new tasks" value={title} onChange={onChangeHandler}></input>
            <button className="todo__add" onClick={addNewTodo} >+</button>
        </div>
    )
}

export default TodoAdd