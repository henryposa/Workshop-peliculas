import React, { useEffect, useState } from 'react'
import { firebase } from '../components/firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { App } from '../App'
import { login } from '../components/actions/action'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { NavBar } from '../components/NavBar'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRouter'

export const Routers = () => {

    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            } else {
                setsIsLoogedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if (checking) {
        return (
            <h1>Cargando ...</h1>
        )
    }
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        //isLooggedIn
                        isAuthenticated={isLooggedIn}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={App}
                        isAuthenticated={isLooggedIn}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>

    )
}
