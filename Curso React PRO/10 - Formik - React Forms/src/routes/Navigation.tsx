import { BrowserRouter } from "react-router-dom"
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { DynamicForm, FormikAbstractionPage, FormikBasicPage, FormikComponentsPage, FormikYupPage, RegisterFormikPage, RegisterPage } from "../03-forms/pages";


import reactLogo from '../assets/react.svg'

export const Navigation = () => {
  return (
    <>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img className="logo" src={ reactLogo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/dynamicForm" className={ ({ isActive }) => isActive ? 'nav-active' : ''}> DynamicForm </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}> RegisterPage </NavLink>
                        </li>
                        <li>
                            <NavLink to="/registerFormik" className={ ({ isActive }) => isActive ? 'nav-active' : ''}> RegisterFormikPage </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikBasic" className={ ({ isActive }) => isActive ? 'nav-active' : ''}> FormikBasicPage </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikYup" className={ ({ isActive }) => isActive ? 'nav-active' : ''}> FormikYupPage </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikComponents" className={ ({ isActive }) => isActive ? 'nav-active' : ''}> FormikComponentsPage </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikAbstraction" className={ ({ isActive }) => isActive ? 'nav-active' : ''}> FormikAbstractionPage </NavLink>
                        </li>

                    </ul>
                </nav>

                <Routes>
                    <Route path="dynamicForm" element={ <DynamicForm /> } />
                    <Route path="register" element={ <RegisterPage/> } />
                    <Route path="registerFormik" element={ <RegisterFormikPage /> } />
                    <Route path="formikBasic" element={ <FormikBasicPage/> } />
                    <Route path="formikYup" element={ <FormikYupPage/> } />
                    <Route path="formikComponents" element={ <FormikComponentsPage /> } />
                    <Route path="formikAbstraction" element={ <FormikAbstractionPage/> } />

                    <Route path="/*" element={ <Navigate to="/home" replace /> }/>
                </Routes>

            </div>
        </BrowserRouter>
    </>
  )
}
