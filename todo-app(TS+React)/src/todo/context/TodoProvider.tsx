import { useReducer } from 'react';
import { TodoState } from '../interfaces/Interfaces';

import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
          id: '1',
          desc: 'Recolectar las Gemas del Infinito',
          completed: false
        },
        {
          id: '2',
          desc: 'Gema del Alma',
          completed: false
        },
        {
          id: '3',
          desc: 'Gema del Espacio',
          completed: false
        },
        {
          id: '4',
          desc: 'Gema del Realidad',
          completed: false
        },
        {
          id: '5',
          desc: 'Gema del Tiempo',
          completed: false
        },
        {
          id: '6',
          desc: 'Gema del Mente',
          completed: false
        },
        {
          id: '7',
          desc: 'Gema del Ego',
          completed: false
        },
    ],
    completed: 0,
    pending: 5
}




interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props ) => {

    const [ todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE );

    const toggleTodo = ( id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }


    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}
