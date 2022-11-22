import './app.css';
import TodoContent from './components/todoContent';
import TodoNavigator from './components/todoNavigator';
import React, { useEffect, useState } from 'react';
// import { Context } from './components/context.js'
import axios from 'axios';

function App() {
  // const [pageActive, setPageActive] = useState(1)
  const [active, setActive] = useState('all')
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState(true)
  const [paramsSort, setParamsSort] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const getTodo = async () => {
    setLoading(true)
    const res = await axios.get('https://todo-api-learning.herokuapp.com/v1/tasks/1', {
      params: {
        filterBy: filter,
        order: paramsSort,
      }
    })
    setTodos(res.data.tasks)
    setLoading(false)
  }

  useEffect(() => {
    getTodo()
  }, [filter, sort])


  function filterState(state) {
    setFilter(state)
    setActive(state)
  }

  function sortByDate(state) {
    setSort(state)
    if (sort) {
      setParamsSort('asc')
    } else {
      setParamsSort('desc')
    }
    setActive('sort')
  }

  async function createTodo(newTodo) {
    await axios.post('https://todo-api-learning.herokuapp.com/v1/task/1', {
      name: newTodo.name,
      done: newTodo.done,
      createdAt: newTodo.createdAt,
      updatedAt: newTodo.updatedAt,
    })
    getTodo()
  }

  async function removeTodo(id) {
    await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/1/${id}`)
    getTodo()
  }

  async function completeTask(todo) {
    await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/1/${todo.uuid}`, {
      name: todo.name,
      done: !todo.done,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    })
    getTodo()
  }



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


  return (
    // <Context.Provider value={{ nextPage, pastPage, pageActive, currentPage }}>
    <div className='Wrapper'>
      <div className="app">
        <TodoNavigator
          filterState={filterState}
          sortByDate={sortByDate}
          isSorted={sort}
          active={active}
          setActive={setActive}
        />
        {/* // active={active}
            // setActive={setActive}  */}
        <TodoContent
          setTodos={setTodos}
          todos={todos}
          completeTask={completeTask}
          removeTodo={removeTodo}
          createTodo={createTodo} />
        {/* todosPrePage={todosPrePage}
            totalTodo={filteredTodos.length}
            todoPagination={todoPagination}  */}
      </div>
    </div>
    // </Context.Provider>
  );
}

export default App;