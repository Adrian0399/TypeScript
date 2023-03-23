import { Timer } from './Timer';
import { useState } from 'react';

export const TimerPadre = () => {

  const [millisegundos, setMillisegundos] = useState(1000);

  return (
    <>
        <h2>TimerPadre</h2>
        <h3>useEffect - useRef</h3>

        <span>Milisegundos { millisegundos } </span>

        <button
          className='btn btn-outline-success'
          onClick={ () => setMillisegundos(1000)}
        >
          1000
        </button>
        <button
          className='btn btn-outline-success'
          onClick={ () => setMillisegundos(5000)}
        >
          5000
        </button>

        <Timer millisegundos = { millisegundos } />

    </>
  )
}
 