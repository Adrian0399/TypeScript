import { useForm } from '../hooks/useForm';
import { Formulario } from './Formulario';

export const Formulario2 = () => {

    const { formulario, handleChange } = useForm({
        postal: 'ABC',
        ciudad: 'Ottawa',
    });

    const { postal, ciudad } = formulario;
    
  return (
    <form autoComplete="off">
        <div className="ms-3">
            <label className="form-label">Codigo Postal:</label>
            <input 
                type="text" 
                className="form-control"
                name="postal"
                value={ postal }
                onChange={ handleChange }
            />
        </div>

        <div className="ms-3">
            <label className="form-label">Ciudad:</label>
            <input 
                type="text" 
                className="form-control"
                name="ciudad"
                value={ ciudad }
                onChange={ handleChange }
            />
        </div>

        <pre> {JSON.stringify(formulario)} </pre>

    </form>
  )
}
