import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}


export const Formulario = () => {

    const { formulario, nombre, email, edad, handleChange } = useForm<FormData>({
        email: 'adrianolvera03@hotmail.com',
        nombre: 'Adrian Olvera',
        edad: 35
    });

    // const { email, nombre, edad } = formulario;

    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: '',
    // });

    // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target;

    //     setFormulario({
    //         ...formulario,
    //         [ name ]: value
    //     });
    // }


  return (
    <form autoComplete="off">
        <div className="ms-3">
            <label className="form-label">Email:</label>
            <input 
                type="email" 
                className="form-control"
                name="email"
                value={ email }
                onChange={ handleChange }
            />
        </div>

        <div className="ms-3">
            <label className="form-label">Nombre:</label>
            <input 
                type="text" 
                className="form-control"
                name="name"
                value={ nombre }
                onChange={ handleChange }
            />
        </div>

        <div className="ms-3">
            <label className="form-label">Edad:</label>
            <input 
                type="number" 
                className="form-control"
                name="edad"
                value={ edad }
                onChange={ handleChange }
            />
        </div>

        <pre> {JSON.stringify(formulario)} </pre>

    </form>
  )
}
