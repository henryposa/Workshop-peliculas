import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, loginGoogle } from '../actions/action'
import { useForm } from '../hooks/useForm'
import '../styles/Styles.css'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        console.log("email y password", email, password)
    }

    const handleLoginGoogle = () => {
        dispatch(loginGoogle())
    }
    return (
        <>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 col-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Container className="auth__social-networks">
                    <Container
                        className="google-btn"
                        onClick={handleLoginGoogle}
                    >
                        <Container className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </Container>
                    </Container>
                </Container>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    not registered?
                </Link>
            </Form>
        </>
    )
}
