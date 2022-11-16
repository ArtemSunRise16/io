import React from "react";
import TodoItem from './todoItem'

function TodoList( {todoFilter, completeTask, removeTodo } ) {
    return (
        <div>
                {todoFilter.map(todo => {
                    return (<TodoItem key={todo.id} todo={todo} completeTask={completeTask} removeTodo={removeTodo}/>)
                })}
        </div>
    )
}

export default TodoList