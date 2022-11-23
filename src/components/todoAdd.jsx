import React, { useState } from "react";
import '../style/todoAdd.css'

function TodoAdd({ createTodo, todos }) {

    const [title, setTitle] = useState('')

    const onChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    function addNewTodo() {
        if (title.trim() === '') return null
        if (todos.map(item => item.title).includes(title)) return setTitle('')

        const d = new Date()

        const newTodo = {
            title,
            id: Date.now(),
            completed: false,
            date: `${d.toLocaleString('ru-RU')}`,
            dateForSort: d.getTime()
        }
        createTodo(newTodo)
        setTitle('')
    }


function submitHandler(event) {
    event.preventDefault()
}

    

    return (
        <form className="todo__new" onSubmit={submitHandler}>
            <input type="text" placeholder="Add a new tasks" value={title} onChange={onChangeHandler}></input>
            <button className="todo__add" onClick={addNewTodo} >+</button>
        </form>
    )
}

export default TodoAdd