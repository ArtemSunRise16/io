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
  Button,
} from "@chakra-ui/react";
import { Theme } from "./style/Theme";
import InitialFocus from "./components/modal";
import { loginUser, registerUser, deletAccauntUser } from "./services/user";

function App() {
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(constants.asc);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalTodos, setTotalTodos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState();
  const todosPrePage = 7;

  const saveLocalStorage = (token, username, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("userId", userId);
    setUsers(localStorage.getItem("username"));
  };

  const login = async (username, password) => {
    try {
      const response = await loginUser(username, password);
      const { data } = response;
      saveLocalStorage(data.accessToken, data.username, data.userId);
    } catch (e) {
      console.log(e.response);

      setError(e.response.data.message);
    }
  };

  const register = async (username, password) => {
    try {
      const response = await registerUser(username, password);
      const { data } = response;
      saveLocalStorage(data.accessToken, data.username, data.userId);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
      setUsers("");
    } catch (e) {
      setError(e.response.data?.message);
    }
  };

  const deletAccount = async () => {
    try {
      await deletAccauntUser(localStorage.getItem("userId"));
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      setUsers("");
    } catch (e) {
      console.log(e);
    }
  };

  const getTodo = async () => {
    try {
      setLoading(true);
      const {
        data: { count, rows },
      } = await getTasks({ filter, sort, todosPrePage, currentPage });
      setTotalTodos(count);
      setTodos(rows);
      setUsers(localStorage.getItem("username"));
    } catch (e) {
      setError(e.response.data?.message);
    } finally {
      setTimeout(() => setLoading(false), 200);
    }
  };

  useEffect(() => {
    getTodo();
  }, [filter, sort, currentPage, users]);

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
            top="5%"
            status="error"
          >
            <AlertIcon />
            <AlertTitle>{error}!</AlertTitle>
          </Alert>
        ) : null}
        <Box
          w={isSmallThan850 ? "400px" : "900px"}
          display="flex"
          p={isSmallThan850 ? "10px" : "32px"}
          bg="#fff"
          flexGrow="1"
          h="80vh"
          borderRadius="10px"
          flexDirection={isSmallThan850 ? "column" : "row"}
        >
          {users ? (
            <Box display="flex" mb="10px" justifyContent="space-between">
              <Box
                top={isSmallThan850 ? "0" : "160"}
                maxW="190px"
                m="10px"
                fontWeight="900"
                fontSize="15px"
                position={isSmallThan850 ? "relative" : "absolute"}
              >
                {`Login: ${users}`}
              </Box>

              <Button
                color="#EA5959"
                onClick={() => logout()}
                fontSize="15px"
                bg="none"
                position={isSmallThan850 ? "relative" : "absolute"}
              >
                Logout
              </Button>

              <Button
                onClick={() => deletAccount()}
                top={isSmallThan850 ? "0" : "100"}
                color="#EA5959"
                fontSize="15px"
                bg="none"
                position={isSmallThan850 ? "relative" : "absolute"}
              >
                Delet account
              </Button>
            </Box>
          ) : (
            <Box
              position={isSmallThan850 ? "relative" : "absolute"}
              m={isSmallThan850 ? "15px" : "0px"}
              display="flex"
            >
              <InitialFocus
                buttonText={"Register"}
                formText={"Create your account"}
                formFunc={register}
                text={"Create"}
              />
              <InitialFocus
                buttonText={"Sig in"}
                formText={"Your account"}
                formFunc={login}
                text={"Sig in"}
              />
            </Box>
          )}

          <TodoNavigator
            filterState={filterState}
            filter={filter}
            sortByDate={sortByDate}
            isSorted={sort}
          />

          <TodoContent
            users={users}
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
