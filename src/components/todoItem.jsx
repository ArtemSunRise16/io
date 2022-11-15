import { waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import '../style/todoContent.css'

function TodoItem({ todo, completeTask, removeTodo }) {

    const  onClickHandler = () => {
        removeTodo(todo.id)
    } 

    return (
        <div className="todo__list">
            <div>
                <input className="todo__task__checkbox" type="checkbox" onChange={() => completeTask(todo.id)}></input>
            </div>
            <div className="todo__task__text">
                {todo.title}
            </div>
            <button onClick={onClickHandler} className="todo__task__del">&times;</button>
        </div>

    )

}

export default TodoItem;