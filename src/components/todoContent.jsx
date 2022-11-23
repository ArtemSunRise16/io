import React from "react";
import '../style/todoContent.css'
import Pagination from "./pagination";
import Modal from "./popup";
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";

// function TodoContent({ todoFilter, completeTask, removeTodo, createTodo, todosPrePage, totalTodo, todoPagination, todos, setTodos })

function TodoContent({ error, setError, todoPagination, totalTodo, todosPrePage, saveTodo, completeTask, removeTodo, todos, createTodo }) {



    return (
        <div className="todo__content">
            <h1 className="todo__title">Tasks</h1>
            {error ? <Modal error={error} setError={setError}><p>Слишком быстро удаляете. Подождите, пожалуйста</p></Modal> : null}
            <TodoAdd todos={todos} createTodo={createTodo} />
            {todos.length ? <TodoList saveTodo={saveTodo} completeTask={completeTask} removeTodo={removeTodo} todos={todos} /> : <h3>Нет заметок</h3>}
            <Pagination todosPrePage={todosPrePage} totalTodo={totalTodo} todoPagination={todoPagination} />
        </div>
    )
}

export default TodoContent;


// return (
// <div className="todo__content">
{/* <h1 className="todo__title">Tasks</h1> */ }
{/* <TodoAdd createTodo={createTodo} /> */ }
{/* <TodoList setTodos={setTodos} todoFilter={todoFilter} completeTask={completeTask} removeTodo={removeTodo} todos={todos} /> */ }
{/* <Pagination todosPrePage={todosPrePage} totalTodo={totalTodo} todoPagination={todoPagination}/> */ }
{/* </div> */ }
// )
// }


{/* {error ? <Modal error={error} setError={setError}><p>Слишком быстро удаляете. Подождите, пожалуйста</p></Modal> : null} */ }
