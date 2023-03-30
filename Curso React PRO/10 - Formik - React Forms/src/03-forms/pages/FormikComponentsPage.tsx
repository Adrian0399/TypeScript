import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormikErrors } from 'formik/dist/types';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikComponentsPage = () => {
    
  return (
    <div>
        <h1>Formik Components</h1>

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
                    <Form 
                        noValidate
                    >
                    <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text"/>
                        <ErrorMessage name="firstName" component="span"/>

                    <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text"/>
                        <ErrorMessage name="lastName" component="span"/>

                    <label htmlFor="email">Email Addres</label>
                        <Field name="email" type="text"/>
                        <ErrorMessage name="email" component="span"/>

                    <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Seleccione su puesto</option>
                            <option value="DEV">DEV</option>
                            <option value="QA">QA</option>
                            <option value="SR">SR</option>
                            <option value="JR">JR</option>
                            <option value="LT">LT</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>

                    <label>
                        <Field name="terms" type="checkbox"/>
                        Terms and Conditions
                    </label>
                    <ErrorMessage name="terms" component="span"/>

                    <button type="submit">Submit</button>

                    </Form>
                )
            }

        </Formik>
    </div>
  )
}
