import React from "react";
import TodoItem from './todoItem'

function TodoList({ todoFilter, completeTask, removeTodo, todos, setTodos }) {
    

    function saveTodo(id, value) {
        setTodos(todos.map(item => {
            return { ...item, title: item.id === id ? item.title = value : item.title }
          }))
    }

    return (
        <div>
            {todoFilter.map(todo => {
                return (<TodoItem saveTodo={saveTodo} key={todo.id} todo={todo} completeTask={completeTask} removeTodo={removeTodo} />)
            })}
        </div>
    )
}

export default TodoList