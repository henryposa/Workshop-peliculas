import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AddMovie } from './formulario/AddMovie'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        Dulceria
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Lista dulces
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/producto/nuevo">
                                    Nuevo dulce
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-3">
                    <Link type="button" className="btn btn-primary me-2" to= "/auth/login">Login</Link>
                    <Link type="button" className="btn btn-primary" to="/auth/register">Register</Link>
                </div>
            </nav>
            <AddMovie/>
        </div>
    )
}
