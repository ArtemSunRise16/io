import './app.css';
import TodoContent from './components/todoContent';
import TodoNavigator from './components/todoNavigator';
import React, { useState } from 'react';
import { Context } from './components/context.js'

function App() {
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('default')
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: '0' },
    { id: 2, completed: false, title: '1' },
    { id: 3, completed: false, title: '2' },
    { id: 4, completed: false, title: '3' },
    { id: 5, completed: false, title: '4' },
    { id: 6, completed: false, title: '5' },
    { id: 7, completed: false, title: '6' },
    { id: 8, completed: false, title: '7' },
    { id: 9, completed: false, title: '8' },
  ])

  const sortedTodos = (() => {
    const stateSort = sort === 'up'
      ? todos.sort((a, b) => a.dateForSort - b.dateForSort)
      : todos.sort((a, b) => b.dateForSort - a.dateForSort)
    return stateSort;
  })()


  const filteredTodos = (() => {
    const stateFilter = filter === 'all'
      ? sortedTodos
      : sortedTodos.filter((item) => item.completed === filter);
    return stateFilter;
  })()

  const [currentPage, setCurrentPage] = useState(1)
  const todosPrePage = 4

  const paginationTodos = (() => {
    const lastTodoIndex = currentPage * todosPrePage
    const firstTodoIndex = lastTodoIndex - todosPrePage
    const currentTodoPage = filteredTodos.slice(firstTodoIndex, lastTodoIndex)
    return currentTodoPage;
  })()




  function completeTask(id) {
    setTodos(
      todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        console.log(item);
        return item
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(item => item.id !== id))
  }

  function createTodo(newTodo) {
    setTodos([newTodo, ...todos])
  }

  function filterState(state) {
    setFilter(state)
  }

  function sortByDate(state) {
    setSort(state)
  }

  function todoPagination(page) {
    setCurrentPage(page)
  }

  function nextPage() {
    setCurrentPage(past => past + 1)
  }

  function pastPage() {
    setCurrentPage(past => past - 1)
  }


  return (
    <Context.Provider value={{nextPage, pastPage}}>
      <div className='Wrapper'>
        <div className="app">
          <TodoNavigator
            filterState={filterState}
            sortByDate={sortByDate} />
          <TodoContent
            todos={todos}
            todoFilter={paginationTodos}
            completeTask={completeTask}
            removeTodo={removeTodo}
            createTodo={createTodo}
            todosPrePage={todosPrePage}
            totalTodo={todos.length}
            todoPagination={todoPagination} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;