import React from 'react'
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

const App = React.memo(() => {
  return (
    <>
      <TodoInput/>
      <TodoList/>
    </>
  )
})

export default App