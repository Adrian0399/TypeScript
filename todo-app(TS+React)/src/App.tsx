import { useState } from 'react'

import { Todo } from './todo/Todo';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todo />
    </div>
  )
}

export default App
