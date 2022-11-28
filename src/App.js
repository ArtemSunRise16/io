import TodoContent from './components/todoContent';
import TodoNavigator from './components/todoNavigator';
import React, { useEffect, useState } from 'react';
import { Context } from './components/context.js'
import { getTasks, postCreateTodo, deletTask, patchCompleteTask, patchSaveTask } from './services/api';
import Modal from './components/popup';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Theme } from './style/Theme'

function App() {

  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('asc')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalTodos, setTotalTodos] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const todosPrePage = 7


  const getTodo = async () => {
    try {
      setLoading(true)
      const {data: { count, tasks }} = await getTasks({filter, sort, todosPrePage, currentPage})
      setTotalTodos(count)
      setTodos(tasks)
      setLoading(false)
    } catch (e) {
      setError(e.response.data?.message)
    }
  }

  useEffect(() => {
    getTodo()
  }, [filter, sort, currentPage])


  function filterState(state) {
    setCurrentPage(1)
    setFilter(state)
  }

  function sortByDate(value) {
    console.log(value);
    setSort(value)
    setCurrentPage(1)

  }

  async function createTodo(newTodo) {
    try {
      setLoading(true)
      await postCreateTodo(newTodo)
      getTodo()
      setLoading(false)
    } catch (e) {
      setError(e.response.data.message)
      setLoading(false)
    }
  }

  async function removeTodo(id) {
    try {
      await deletTask(id)
      getTodo()
    } catch (e) {
      setError(e.response.data.message)
    }
  }

  async function completeTask(todo) {
    try {
      await patchCompleteTask(todo)
      getTodo()
    }
    catch (e) {
      setError(e.response.data.message)
    }
  }

  async function saveTodo(id, value, todo) {
    try {
      await patchSaveTask(id, value, todo)
      getTodo()
    }
    catch (e) {
      setError(e.response.data.message)
    }

  }

  useEffect(() => {
    if (error != null) {
      setTimeout(() => {setError(null)}, 2000)
    }
  }, [error])

  function todoPagination(page) {
    setCurrentPage(page)
  }

  function nextPage() {
    setCurrentPage(next => next === Math.ceil(totalTodos / todosPrePage) ? next : next + 1)
  }

  function pastPage() {
    setCurrentPage(past => past === 1 ? 1 : past - 1)
  }

  if (todos.length <= 0 && currentPage > 1) {
    setCurrentPage(prev => prev - 1)
  }



  return (
    <ChakraProvider theme={Theme}>
      <Context.Provider value={{ nextPage, pastPage, currentPage, loading, setLoading }}>
        <Box display='flex' p='32px' bg='#fff' flexGrow='1' maxW='1000px' h='80vh' borderRadius='10px' className="app">
          <TodoNavigator
            filterState={filterState}
            filter={filter}
            sortByDate={sortByDate}
            isSorted={sort}
          />
          <TodoContent
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
            todoPagination={todoPagination} />
        </Box>
        {error === error && error != null ? <Modal error={error} setError={setError}/> : null}
      </Context.Provider>
    </ChakraProvider>
  );
}

export default App;