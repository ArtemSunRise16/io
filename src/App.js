import TodoContent from "./components/todoContent";
import { constants } from "./constants/constants";
import TodoNavigator from "./components/todoNavigator";
import React, { useEffect, useState } from "react";
import { Context } from "./components/context.js";
import {
  getTasks,
  postCreateTodo,
  deletTask,
  patchCompleteTask,
  patchSaveTask,
} from "./services/api";
import {
  ChakraProvider,
  Box,
  useMediaQuery,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { Theme } from "./style/Theme";

function App() {
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(constants.asc);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalTodos, setTotalTodos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPrePage = 7;

  const getTodo = async () => {
    try {
      setLoading(true);
      const {
        data: { count, rows },
      } = await getTasks({ filter, sort, todosPrePage, currentPage });
      setTotalTodos(count);
      setTodos(rows);
    } catch (e) {
      setError(e.response.data?.message);
    } finally {
      setTimeout(() => setLoading(false), 200);
    }
  };

  useEffect(() => {
    getTodo();
  }, [filter, sort, currentPage]);

  function filterState(state) {
    setCurrentPage(1);
    setFilter(state);
  }

  function sortByDate(value) {
    setSort(value);
    setCurrentPage(1);
  }

  async function createTodo(newTodo) {
    try {
      setLoading(true);
      await postCreateTodo(newTodo);
      getTodo();
      setLoading(false);
    } catch (e) {
      setError(e.response.data.message);
      setLoading(false);
    }
  }

  async function removeTodo(id) {
    try {
      setLoading(true);
      await deletTask(id);
      getTodo();
    } catch (e) {
      setError(e.response.data.message);
    }
  }

  async function completeTask(todo) {
    try {
      await patchCompleteTask(todo);
      getTodo();
    } catch (e) {
      setError(e.response.data.message);
    }
  }

  async function saveTodo(id, value, todo) {
    try {
      await patchSaveTask(id, value, todo);
      getTodo();
    } catch (e) {
      setError(e.response.data.message);
    }
  }

  useEffect(() => {
    if (error != null) {
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }, [error]);

  function todoPagination(page) {
    setCurrentPage(page);
  }

  function nextPage() {
    setCurrentPage((next) =>
      next === Math.ceil(totalTodos / todosPrePage) ? next : next + 1
    );
  }

  function pastPage() {
    setCurrentPage((past) => (past === 1 ? 1 : past - 1));
  }

  if (todos.length <= 0 && currentPage > 1) {
    setCurrentPage((prev) => prev - 1);
  }

  const [isSmallThan850] = useMediaQuery("(max-width: 930px)");

  return (
    <ChakraProvider theme={Theme}>
      <Context.Provider value={{ nextPage, pastPage, currentPage, setLoading }}>
        {error === error && error != null ? (
          <Alert
            borderRadius="10px"
            position="fixed"
            w="400px"
            top="1%"
            status="error"
          >
            <AlertIcon />
            <AlertTitle>{error}!</AlertTitle>
          </Alert>
        ) : null}
        <Box
          w={isSmallThan850 ? "400px" : "900px"}
          display="flex"
          p="32px"
          bg="#fff"
          flexGrow="1"
          h="80vh"
          borderRadius="10px"
          flexDirection={isSmallThan850 ? "column" : "row"}
          className="app"
        >
          <TodoNavigator
            filterState={filterState}
            filter={filter}
            sortByDate={sortByDate}
            isSorted={sort}
          />
          <TodoContent
            loading={loading}
            error={error}
            setError={setError}
            setTodos={setTodos}
            todos={todos}
            completeTask={completeTask}
            removeTodo={removeTodo}
            createTodo={createTodo}
            saveTodo={saveTodo}
            todosPrePage={todosPrePage}
            totalTodo={totalTodos}
            todoPagination={todoPagination}
          />
        </Box>
      </Context.Provider>
    </ChakraProvider>
  );
}

export default App;
