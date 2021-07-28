import { google, firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";

// Login basico Vincula con el Redux
export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

//Vincula con Google en Firebase
export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                console.log("user aca : ", user)
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}
//REGISTRO: 1er paso
//Registro de email, password y nombre y lo guarda en Firebase
export const registroEmailPasswordNombre = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {
                console.log(user);
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}

// REGISTRO: 3er paso
//Realiza login de usuario con correo y clave ya almacenados en Firebase
export const loginEmailPassword= (email, password) =>{
    //devuelve un callback
    return (dispatch) => {
        firebase.auth(). signInWithEmailAndPassword(email,password)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})
