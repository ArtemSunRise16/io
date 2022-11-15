import React from "react";
import TodoItem from './todoItem'

function TodoList( {todos, completeTask, removeTodo } ) {
    return (
        <div>
                {todos.map(todo => {
                    return (<TodoItem todo={todo} completeTask={completeTask} removeTodo={removeTodo}/>)
                })}
        </div>
    )
}

export default TodoList