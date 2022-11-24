import React, { useContext, useState } from "react";
import '../style/todoAdd.css'
import { Context } from "./context";

function TodoAdd({ createTodo, todos }) {

    const { loading } = useContext(Context)

    const [name, setName] = useState('')

    const onChangeHandler = (event) => {
        setName(event.target.value);
    }

    function addNewTodo() {
        if (name.trim() === '') return null

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
        <form aria-disabled={loading} className="todo__new" onSubmit={submitHandler}>
            <input  type="text" placeholder="Add a new tasks" value={name} onChange={onChangeHandler}></input>
            <button className="todo__add" onClick={addNewTodo} >+</button>
        </form>
    )
}

export default TodoAdd