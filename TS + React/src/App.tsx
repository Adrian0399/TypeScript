
import './App.css'
import { Counter } from './components/Counter';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';
import { Formulario2 } from './components/Formulario2';

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

      <ContadorRed/>
      <hr />

      <h2>CustomHooks</h2>
      <Formulario />

      <br />
      <Formulario2 />
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
