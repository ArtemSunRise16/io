import React from "react";
import '../style/todoContent.css'
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";


function TodoContent({ todos, completeTask, removeTodo }) {



    return (
        <div className="todo__content">
            <h1 className="todo__title">Tasks</h1>
            <div className="todo__navigator__media">
                <button>All</button>
                <button>Done</button>
                <button>Undone</button>
                <button>Sort By Date</button>
            </div>
            <TodoAdd />
            <TodoList todos={todos} completeTask={completeTask} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoContent;



// 
{/* <div> */ }
{/* <input className="todo__task__checkbox" type="checkbox"></input> */ }
{/* </div> */ }
{/* <div className="todo__task__text"> */ }
{/* Купить морковку */ }
{/* </div> */ }
{/* <div className="todo__task__del"> */ }
{/* - */ }
{/* </div> */ }