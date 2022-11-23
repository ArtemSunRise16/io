import './app.css';
import TodoContent from './components/todoContent';
import TodoNavigator from './components/todoNavigator';
import React, { useEffect, useState } from 'react';
import { Context } from './components/context.js'
import { getTasks, postCreateTodo, deletTask, patchCompleteTask, patchSaveTask } from './services/API';
import Modal from './components/popup';

function App() {

  const [error, setError] = useState(false)

  const [pageActive, setPageActive] = useState(1)

  const [active, setActive] = useState('')

  const [activeSorted, setActiveSorted] = useState(false)

  const [filter, setFilter] = useState('')

  const [sort, setSort] = useState(true)

  const [paramsSort, setParamsSort] = useState('')

  const [todos, setTodos] = useState([])

  const [loading, setLoading] = useState(false)

  const [countTodos, setCountTodos] = useState(0)

  const [currentPage, setCurrentPage] = useState(1)

  const todosPrePage = 6


  const getTodo = async () => {
    try {
      setLoading(true)
      const res = await getTasks(filter, paramsSort, todosPrePage, currentPage)
      setCountTodos(res.count)
      setTodos(res.tasks)
      setLoading(false)
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    getTodo()
  }, [filter, sort, currentPage])


  function filterState(state) {
    setCurrentPage(1)
    setFilter(state)
    setActive(state)
    setPageActive(1)
  }

  function sortByDate(state, activeSorted) {
    setActive('sort')
    setSort(state)
    setCurrentPage(1)
    setSort(state)
    if (sort) {
      setParamsSort('asc')
    } else {
      setParamsSort('desc')
    }
    setActive('sort')
    setPageActive(1)
    setActiveSorted(activeSorted)
  }

  async function createTodo(newTodo) {
    await postCreateTodo(newTodo)
    getTodo()
  }

  async function removeTodo(id) {
    try {
      await deletTask(id)
      getTodo()
    } catch (e) {
      setError(true)
    }
  }

  async function completeTask(todo) {
    await patchCompleteTask(todo)
    getTodo()
  }

  async function saveTodo(id, value, todo) {
    await patchSaveTask(id, value, todo)
    getTodo()
  }

  function todoPagination(page) {
    setCurrentPage(page)
    setPageActive(page)
  }

  function nextPage() {
    setCurrentPage(next => next === Math.ceil(countTodos / todosPrePage) ? next : next + 1)
    setPageActive(nextPage => nextPage === Math.ceil(countTodos / todosPrePage) ? nextPage : nextPage + 1)
  }

  function pastPage() {
    setCurrentPage(past => past === 1 ? 1 : past - 1)
    setPageActive(pastPage => pastPage === 1 ? 1 : pastPage - 1)
  }

  if (todos.length <= 0 && currentPage > 1) {
    setCurrentPage(prev => prev - 1)
    setPageActive(pastPage => pastPage === 1 ? 1 : pastPage - 1)
  }

  return (
    <Context.Provider value={{ nextPage, pastPage, pageActive, currentPage }}>
      <div className='Wrapper'>
        <div className="app">
          <TodoNavigator
            activeSorted={activeSorted}
            filterState={filterState}
            sortByDate={sortByDate}
            isSorted={sort}
            active={active}
            setActive={setActive}
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
            totalTodo={countTodos}
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