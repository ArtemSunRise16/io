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
  loading,
  users,
}) {
  return (
    <Box flexGrow="1" m="20px">
      <Heading mb="16px">Заметки — и точка</Heading>
      <TodoAdd todos={todos} createTodo={createTodo} />
      {users && todos.length ? (
        <TodoList
          loading={loading}
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
