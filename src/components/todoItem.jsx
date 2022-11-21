import React, { useState } from "react";
import '../style/todoContent.css'
import { BsTrash } from "react-icons/bs";

function TodoItem({ todo, completeTask, removeTodo, saveTodo }) {

    const [value, setValue] = useState('')
    const [edit, setEdit] = useState(null)

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }


    function saveHandler(event) {
        event.preventDefault()
        saveTodo(todo.id, value)
        setEdit(null)
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const onClickHandler = () => {
        removeTodo(todo.id)
    }

    const handlerBlur = () => {
            setEdit(false)   
    }

    const handleEcsPress  = (e) => {
        if (e.keyCode === 27) handlerBlur()
    }

    return (
        <div>
            {
                edit === todo.id ?
                    <form onSubmit={saveHandler} className="todo__list">
                        <input checked={todo.completed ? true : false} className="todo__task__checkbox" type="checkbox" onChange={() => completeTask(todo.id)}></input>
                        <input className="edit__todo" autoFocus onBlur={handlerBlur} value={value} onChange={(e) => {onChangeHandler(e); }} onKeyDown={handleEcsPress}/>
                    </form>
                    :
                    <div className="todo__list">
                        <div>
                            <input checked={todo.completed ? true : false} className="todo__task__checkbox" type="checkbox" onChange={() => completeTask(todo.id)}></input>
                        </div>
                        <div className="todo__task__text" onClick={() => editTodo(todo.id, todo.title)}>
                            {todo.title} <span className="todo__task__date">{todo.date}</span>
                        </div>
                        <button onClick={onClickHandler} className="todo__task__del"><BsTrash></BsTrash></button>
                    </div>
            }



        </div>

    )

}

export default TodoItem;