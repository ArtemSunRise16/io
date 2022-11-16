import React from "react";
import '../style/todoContent.css'
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";


function TodoContent({ todoFilter, completeTask, removeTodo, createTodo, todos }) {


    
    

    return (
        <div className="todo__content">
            <h1 className="todo__title">Tasks</h1>
            <div className="todo__navigator__media">
                <button>All</button>
                <button>Done</button>
                <button>Undone</button>
                <button>Sort By Date</button>
            </div>
            <TodoAdd todos={todos} createTodo={createTodo} />
            <TodoList todoFilter={todoFilter} completeTask={completeTask} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoContent;