import { Box, Heading } from "@chakra-ui/react";
import { Pagination } from "./pagination";
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";

function TodoContent({
  todoPagination,
  totalTodo,
  todosPrePage,
  saveTodo,
  completeTask,
  removeTodo,
  todos,
  createTodo,
}) {
  return (
    <Box m="20px" className="todo__content">
      <Heading mb="16px">Заметки — и точка</Heading>
      <TodoAdd todos={todos} createTodo={createTodo} />
      {todos.length ? (
        <TodoList
          saveTodo={saveTodo}
          completeTask={completeTask}
          removeTodo={removeTodo}
          todos={todos}
        />
      ) : (
        <h3>Нет заметок</h3>
      )}
      <Pagination
        todosPrePage={todosPrePage}
        totalTodo={totalTodo}
        todoPagination={todoPagination}
      />
    </Box>
  );
}

export default TodoContent;
