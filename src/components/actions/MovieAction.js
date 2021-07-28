import { fileUpload } from '../helpers/fileUpload'
import {db} from '../firebase/firebaseConfig'
import {types} from '../types/types'

export const MovieNew = (movie, file) => {
    return async (dispatch, getState) => {
        let fileUrl = []
        const uid = getState().auth.uid
        try {
            fileUrl = await fileUpload(file)
        } catch (error) {
            fileUrl = []
        }
        const newMovie = {
            title: movie.title,
            genre: movie.genre,
            sinopsis: movie.sinopsis,
            url: fileUrl
        }
        const docref = await db.collection(`${uid}/Movie/data`).add(newMovie)
        dispatch(addNewMovie(docref.id, newMovie))
    }
}

export const addNewMovie = ( id, movie ) => ({
    type: types.movieAddNew,
    payload: {
        id, ...movie
    }
})