import React, { useState } from "react";
import '../style/todoAdd.css'

function TodoAdd({ createTodo }) {

    const [name, setName] = useState('')

    const onChangeHandler = (event) => {
        setName(event.target.value);
    }

    function addNewTodo() {
        if(name.trim() === '') return
        const d = new Date()

        const newTodo = {
            name: name,
            done: false,
            createdAt: d.toLocaleString(),
            updatedAt: d.getTime(),
        }
        createTodo(newTodo)
        setName('')
    }


function submitHandler(event) {
    event.preventDefault()
}

    

    return (
        <form className="todo__new" onSubmit={submitHandler}>
            <input type="text" placeholder="Add a new tasks" value={name} onChange={onChangeHandler}></input>
            <button className="todo__add" onClick={addNewTodo} >+</button>
        </form>
    )
}

export default TodoAdd