import './app.css';
import TodoContent from './components/todoContent';
import TodoNavigator from './components/todoNavigator';
import React, { useEffect, useState } from 'react';
import { Context } from './components/context.js'
import { getTasks, postCreateTodo, deletTask, patchCompleteTask, patchSaveTask } from './services/api';

function App() {

  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState(true)
  const [directionSort, setDirectionSort] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalTodos, setTotalTodos] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const todosPrePage = 7


  const getTodo = async () => {
    try {
      setLoading(true)
      const res = await getTasks({filter, directionSort, todosPrePage, currentPage})
      setTotalTodos(res.count)
      setTodos(res.tasks)
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

  function sortByDate(state) {
    setSort(state)
    setCurrentPage(1)
    setSort(state)
    if (sort) {
      setDirectionSort('asc')
    } else {
      setDirectionSort('desc')
    }
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
      setTimeout(() => {setError(null)}, 1000)
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
    <Context.Provider value={{ nextPage, pastPage, currentPage, loading, setLoading }}>
      <div className='Wrapper'>
        <div className="app">
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
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;


    // const lastTodoIndex = currentPage * todosPrePage
    // const firstTodoIndex = lastTodoIndex - todosPrePage
    // const currentTodoPage = todos.slice(firstTodoIndex, lastTodoIndex)

  // function createTodo(newTodo) {
  //   setTodos([newTodo, ...todos])
  // }

  // const sortedTodos = (() => {

  //   const stateSort = sort
  //     ? todos.sort((a, b) => a.dateForSort - b.dateForSort)
  //     : todos.sort((a, b) => b.dateForSort - a.dateForSort)
  //   return stateSort;
  // })()


  // const filteredTodos = (() => {
  //   const stateFilter = filter === 'all'
  //     ? sortedTodos
  //     : sortedTodos.filter((item) => item.completed === filter);
  //   return stateFilter;
  // })()

  // const [currentPage, setCurrentPage] = useState(1)
  // const todosPrePage = 6


  // const paginationTodos = (() => {
  //   const lastTodoIndex = currentPage * todosPrePage
  //   const firstTodoIndex = lastTodoIndex - todosPrePage
  //   const currentTodoPage = filteredTodos.slice(firstTodoIndex, lastTodoIndex)
  //   return currentTodoPage;
  // })()

  // function completeTask(id) {
  //   setTodos(
  //     todos.map(item => {
  //       return { ...item, done: item.uuid === id ? !item.done : item.done }
  //     })
  //   )
  // }

  // function removeTodo(id) {
  //   setTodos(todos.filter(item => item.uuid !== id))
  // }



  //  async function filterState(state) {
  //     setLoading(true)
  //     const res = await axios.get(`https://todo-api-learning.herokuapp.com/v1/tasks/1?filterBy=${state}&order=asc&pp=6&page=1`)
  //     setTodos(res.data.tasks)

  //   getTodo()
  //   //  setFilter(state)
  //   //  setCurrentPage(1)
  //   //  setActive(state)
  //   //  setPageActive(1)
  //  }

  // function sortByDate(state) {
  //   setActive('sort')
  //   setSort(state)
  //   if(state){
  //     setSort('asc')
  //   } else {
  //     setSort('desc')
  //   }
  //   setCurrentPage(1)
  //   setPageActive(1)
  // }

  // function todoPagination(page) {
  //   setCurrentPage(page)
  //   setPageActive(page)
  // }

  // function nextPage() {
  //   setCurrentPage(next => next === Math.ceil(filteredTodos.length / todosPrePage) ? next : next + 1)
  //   setPageActive(nextPage => nextPage === Math.ceil(filteredTodos.length / todosPrePage) ? nextPage : nextPage + 1)
  // }

  // function pastPage() {
  //   setCurrentPage(past => past === 1 ? 1 : past - 1)
  //   setPageActive(pastPage => pastPage === 1 ? 1 : pastPage - 1)
  // }
