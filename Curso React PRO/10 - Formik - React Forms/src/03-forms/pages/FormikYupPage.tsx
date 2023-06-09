import { useFormik } from 'formik';
import * as Yup from 'yup';



interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {

    const { handleSubmit, 
        errors, touched, getFieldProps,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Maximo 15 caracteres').required('Este campo es obligatorio'),
            lastName: Yup.string().max(15, 'Maximo 15 caracteres').required('Este campo es obligatorio'),
            email: Yup.string().email('No es un email valido').required('El correo es obligatorio'),
        })
    });

    
  return (
    <div>
        <h1>Formik Yup</h1>

        <form 
            onSubmit={handleSubmit}
            noValidate
        >
        <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                { ...getFieldProps('firstName')}
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

        <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                { ...getFieldProps('lastName')}
            />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

        <label htmlFor="email">Email Addres</label>
            <input 
                type="text" 
                { ...getFieldProps('email')}
            />
            { touched.email && errors.email && <span>{ errors.email }</span>}
        
        <button type="submit">Submit</button>

        </form>
    </div>
  )
}
