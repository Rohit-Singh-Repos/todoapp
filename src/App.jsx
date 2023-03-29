import React from 'react'
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

const App = React.memo(() => {
  return (
    <div className='container mt-5'>
      <TodoInput/>
      <TodoList/>
    </div>
  )
})

export default App