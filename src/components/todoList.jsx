import { Box, Spinner, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import TodoItem from "./todoItem";

function TodoList({ completeTask, removeTodo, todos, saveTodo, loading }) {
  const [isSmallThan850] = useMediaQuery("(max-width: 930px)");

  return (
    <>
      {loading && (
        <Spinner
          position="absolute"
          top="25%"
          left={isSmallThan850 ? "36%" : "53%"}
          w="100px"
          h="100px"
          thickness="4px"
          speed="0.9s"
          emptyColor="gray.200"
          color="red.500"
          size="lg"
        />
      )}
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
    </>
  );
}

export default TodoList;
