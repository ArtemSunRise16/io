import React from "react";
import '../style/todoContent.css'
import { BsTrash } from "react-icons/bs";

function TodoItem({ todo, completeTask, removeTodo }) {

    const  onClickHandler = () => {
        removeTodo(todo.id)
    } 

    return (
        <div className="todo__list">
            <div>
                <input checked={todo.completed ? true : false } className="todo__task__checkbox" type="checkbox" onChange={() => completeTask(todo.id)}></input>
            </div>
            <div className="todo__task__text">
                {todo.title} <span className="todo__task__date">{todo.date}</span>
            </div>
            <button onClick={onClickHandler} className="todo__task__del"><BsTrash></BsTrash></button>
        </div>

    )

}

export default TodoItem;