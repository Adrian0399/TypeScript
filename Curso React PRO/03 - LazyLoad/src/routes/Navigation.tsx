import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom"
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from './routes';

import reactLogo from '../assets/react.svg'


export const Navigation = () => {
  return (
    <>
    <Suspense fallback={null}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img className="logo" src={ reactLogo } alt="React Logo" />
                    <ul>

                        {
                            routes.map(({ to, name }) => (
                            <li key={ to }>
                                <NavLink 
                                    to={ to } 
                                    className={ ({ isActive }) => isActive ? 'nav-active' : ''}> 
                                    { name }
                                </NavLink>
                            </li>
                            ))
                        }

                    </ul>
                </nav>

                <Routes>

                    {
                        routes.map( ({ path, Component}) => (
                            <Route 
                                key={ path }
                                path={ path }
                                element={ <Component /> }
                            />
                        ))
                    }

                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> }/>
                </Routes>

            </div>
        </BrowserRouter>
    </Suspense>
    </>
  )
}
