import './app.css';
import TodoContent from './components/todoContent';
import TodoNavigator from './components/todoNavigator';
import React, { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'Купить морковку' },
    { id: 2, completed: false, title: 'Сделать Todo list' },
    { id: 3, completed: false, title: 'Lerning React' }
  ])

  const [todoFilter, setTodoFilter] = useState(todos)

  useEffect(() => {
    setTodoFilter(todos)
  }, [todos])


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
    if (state === 'all') {
      setTodoFilter(todos)
    } else {
      const newTodoStatus = [...todos].filter(todo => todo.completed === state)
      setTodoFilter(newTodoStatus)
    }
  }

  function sortByDate(state) {
    if (state === 'up') {
      const sortTodosByDateUp = [...todos].sort((a, b) => a.dateForSort - b.dateForSort)
      setTodoFilter(sortTodosByDateUp)
    } else {
      const sortTodosByDateDown = [...todos].sort((a, b) => b.dateForSort - a.dateForSort)
      setTodoFilter(sortTodosByDateDown)
    }
  }


  return (

    <div className='Wrapper'>
      <div className="app">
        <TodoNavigator filterState={filterState} sortByDate={sortByDate} />
        <TodoContent
          todos={todos}
          todoFilter={todoFilter}
          completeTask={completeTask}
          removeTodo={removeTodo}
          createTodo={createTodo} />
      </div>
    </div>
  );
}

export default App;
