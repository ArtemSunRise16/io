import React from "react";
import TodoItem from './todoItem'
import axios from "axios";
function TodoList({ completeTask, removeTodo, todos, saveTodo }) {


   

    return (
        <div>
            {
                todos.map(todo => {
                    return (<TodoItem saveTodo={saveTodo} key={todo.uuid} todo={todo} completeTask={completeTask} removeTodo={removeTodo} />)
                })
            }
        </div>
    )
}

export default TodoList

// return (<TodoItem saveTodo={saveTodo} key={todo.uuid} todo={todo} completeTask={completeTask} removeTodo={removeTodo} />)
