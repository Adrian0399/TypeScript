import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';



export const RegisterPage = () => {

    const { formData, onChange, resetForm, isValidEmail,
        name, email, password1, password2,
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={ (ev) => onSubmit(ev) }>
            <input 
                type="text" 
                placeholder="Name"
                name="name"
                value={ name }
                onChange={ onChange }
                className={ `${ name.trim().length <= 0 && 'has-error'}` }
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input 
                type="email" 
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onChange }
                className={ `${ !isValidEmail( email ) && 'has-error'}` }
            />
            { !isValidEmail( email ) && <span>Email no es válido</span>}

            <input 
                type="password1" 
                placeholder="Password"
                name='password1'
                value={ password1 }
                onChange={ (ev) => onChange(ev) }
            />
            { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe ser de min 6 letras</span>}

            <input 
                type="password2" 
                placeholder="Repeat Password"
                name="password2"
                value={ password2 }
                onChange={ onChange }
            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password1 !== password2 && <span>Las contraseñas no coinciden</span> }
            <button 
                type="submit"
            >
                Create
            </button>

            <button 
                type="button"
                onClick={ resetForm }
            >
                Reset
            </button>



        </form>
    </div>
  )
}
