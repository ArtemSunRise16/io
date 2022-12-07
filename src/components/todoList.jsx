import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import TodoItem from "./todoItem";

function TodoList({ completeTask, removeTodo, todos, saveTodo, loading }) {
  return (
    <>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="450"
        >
          <Spinner
            w="100px"
            h="100px"
            thickness="4px"
            speed="0.9s"
            emptyColor="gray.200"
            color="red.500"
            size="lg"
          />
        </Box>
      ) : (
        <Box>
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
      )}
    </>
  );
}

export default TodoList;
