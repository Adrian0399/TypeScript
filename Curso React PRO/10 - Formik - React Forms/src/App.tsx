import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navigation } from './routes/Navigation'
import viteLogo from '/vite.svg'
import '../src/03-forms/styles/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
    </>
  )
}

export default App
