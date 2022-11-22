import React from "react";
import TodoItem from './todoItem'

function TodoList({ completeTask, removeTodo, todos }) {


    // function saveTodo(id, value) {
    //     setTodos(todos.map(item => {
    //         return { ...item, title: item.id === id ? item.title = value : item.title }
    //       }))
    // }

    return (
        <div>
            {
                todos.map(todo => {
                    return (<TodoItem key={todo.uuid} todo={todo} completeTask={completeTask} removeTodo={removeTodo} />)
                })
            }
        </div>
    )
}

export default TodoList

// return (<TodoItem saveTodo={saveTodo} key={todo.uuid} todo={todo} completeTask={completeTask} removeTodo={removeTodo} />)
