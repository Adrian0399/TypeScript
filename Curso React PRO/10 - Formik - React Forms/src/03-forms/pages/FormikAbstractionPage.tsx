import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikAbstractionPage = () => {
    
  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik 
            initialValues= {{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
            }}
            onSubmit={ (values) =>{
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string().max(15, 'Maximo 15 caracteres').required('Este campo es obligatorio'),
                    lastName: Yup.string().max(15, 'Maximo 15 caracteres').required('Este campo es obligatorio'),
                    email: Yup.string().email('No es un email valido').required('El correo es obligatorio'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar los Terminos y Condiciones'),
                    jobType: Yup.string().notOneOf(['LT'], 'Esta opción no esta permitida').required('Requerido'),
            })}
        >

            {
                (formik) => (
                    <Form>
                    <MyTextInput label="First Name" name="firstName" placeholder="Ingrese su nombre(s)"/>
                  
                    <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Ingrese sus apellidos"/>

                    <MyTextInput label="Email Address" name="email" type="email" placeholder="example@gmail.com"/>

                    <MySelect label="Job Type" name="jobType" >
                        <option value="">Seleccione su puesto</option>
                        <option value="DEV">DEV</option>
                        <option value="QA">QA</option>
                        <option value="SR">SR</option>
                        <option value="JR">JR</option>
                        <option value="LT">LT</option>
                    </MySelect>

                    <MyCheckbox label={'Terms & Conditions'} name="terms" />
                    
                    <button type="submit">Submit</button>

                    </Form>
                )
            }

        </Formik>
    </div>
  )
}
