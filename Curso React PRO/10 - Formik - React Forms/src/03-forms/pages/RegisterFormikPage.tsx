
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';


interface FormValues {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik 
            initialValues={{
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
            }}
            onSubmit={ (values) =>{
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string().min(2, 'Min. 2 caracteres').max(15, 'Max. 15 caracteres').required('Obligatroio'),
                    email: Yup.string().email('No es un email valido').required('El correo es obligatorio'),
                    password: Yup.string().min(6, 'Min. 6 caracteres').required('Obligatroio'),
                    repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden').required('Obligatroio'),
                })
            }
        >

       
            {
                (formik) => (
                    <Form>
                        <MyTextInput label="Name" name="name" placeholder="Ingrese su nombre"/>

                        <MyTextInput label="Email" name="email" placeholder="ejemplo@gmail.com"/>

                        <MyTextInput label="Password" name="password" placeholder="Ingrese su contraseña"/>

                        <MyTextInput label="Repeat Password" name="repeatPassword" placeholder="Repita su contraseña"/>

                        <button type="submit"> 
                            Create 
                        </button>

                        {/* <button type="button"onClick={ resetForm }>
                            Reset Form
                        </button> */}

                    </Form>
                )
            }
       
       </Formik>
    </div>
  )
}
