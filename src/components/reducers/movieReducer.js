import { types } from "../types/types";

const initialState = {
    // Tarjetas de tareas
    movie: [],
    // Tarea especifica activa
    active: null
}

// Nueva tarea
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.movieAddNew:
            return {
                ...state,
                movie: [action.payload, ...state.movie]
            }

        default:
            return state;
    }
}
