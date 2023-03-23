
import './App.css'
import { Counter } from './components/Counter';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {

  return (
    <>
      <h1>React + TS</h1>
      <hr />

      <Counter />
      <hr />
      <Usuario />
      <hr />
      <TimerPadre />
      <hr />
    </>
  )
}

export default App
