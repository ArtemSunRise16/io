import { Box } from "@chakra-ui/react";
import React from "react";
import TodoItem from "./todoItem";

function TodoList({ completeTask, removeTodo, todos, saveTodo }) {
  // loader

  return (
    <Box w="700px">
      {todos.map((todo) => {
        return (
          <TodoItem
            saveTodo={saveTodo}
            key={todo.uuid}
            todo={todo}
            completeTask={completeTask}
            removeTodo={removeTodo}
          />
        );
      })}
    </Box>
  );
}

export default TodoList;
