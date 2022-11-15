import './app.css';
import TodoContent from './components/todoContent';
import TodoNavigator from './components/todoNavigator';
import React, { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'Купить морковку' },
    { id: 2, completed: false, title: 'Сделать Todo list' },
    { id: 3, completed: false, title: 'Lerning React' }
  ])

  function completeTask (id) {
    setTodos(
      todos.map(item => {
        if(item.id === id){
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

  return (

    <div className='Wrapper'>
      <div className="app">
        <TodoNavigator />
        <TodoContent todos={todos} completeTask={completeTask} removeTodo={removeTodo}/>
      </div>
    </div>
  );
}

export default App;
