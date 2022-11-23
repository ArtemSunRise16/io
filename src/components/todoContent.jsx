import React from "react";
import '../style/todoContent.css'
import Pagination from "./pagination";
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";

function TodoContent({ todoFilter, completeTask, removeTodo, createTodo, todosPrePage, totalTodo, todoPagination, todos, setTodos }) {



    return (
        <div className="todo__content">
            <h1 className="todo__title">Tasks</h1>
            <TodoAdd todos={todos} createTodo={createTodo} />
            <TodoList setTodos={setTodos} todoFilter={todoFilter} completeTask={completeTask} removeTodo={removeTodo} todos={todos} />
            <Pagination todosPrePage={todosPrePage} totalTodo={totalTodo} todoPagination={todoPagination}/>
        </div>
    )
}

export default TodoContent;