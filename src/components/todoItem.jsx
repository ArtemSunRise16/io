import React, { useContext, useState } from "react";
import '../style/todoContent.css'
import { BsTrash } from "react-icons/bs";
import { Context } from "./context";

function TodoItem({ saveTodo, todo, completeTask, removeTodo }) {

    const { loading } = useContext(Context)

    const [value, setValue] = useState('')
    const [edit, setEdit] = useState(null)

    function editTodo(id, value) {
        setEdit(id)
        setValue(value)
    }


    function saveHandler(event) {
        event.preventDefault()
        saveTodo(todo.uuid, value, todo)
        setEdit(null)
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const onClickHandler = () => {
        removeTodo(todo.uuid)
    }

    const handlerBlur = () => {
        setEdit(false)
    }

    const handleEcsPress = (e) => {
        if (e.keyCode === 27) handlerBlur()
    }

    return (
        <div>
            {
                edit ?
                    <form onSubmit={saveHandler} className="todo__list__edit">
                        <input checked={todo.done ? true : false} className="todo__task__checkbox" type="checkbox" onChange={() => completeTask(todo.uuid)}></input>
                        <input className="edit__todo" autoFocus onBlur={handlerBlur} value={value} onChange={(e) => { onChangeHandler(e); }} onKeyDown={handleEcsPress} />
                    </form>
                    :
                    <div className="todo__list">
                        <div>
                            <input checked={todo.done ? true : false} className="todo__task__checkbox" type="checkbox" onChange={() => completeTask(todo)}></input>
                        </div>

                        <div onClick={() => editTodo(todo.uuid, todo.name)} className="todo__task__text">
                            {todo.name}
                        </div>
                        <div className="todo__task__date">
                            {todo.createdAt}
                        </div>

                        <button onClick={onClickHandler} className="todo__task__del"><BsTrash></BsTrash></button>
                    </div>

            }
        </div>

    )

}

export default TodoItem;