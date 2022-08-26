import {GET_WEATHER, SET_LOADING, WEATHER_RESULT, WEATHER_ERROR, END_LOADING, ADD_WEATHER_RESULT, ADD_WEATHER} from '../constants/weatherConstant'
export const addMovies = (payload) => {
    return {
        type: ADD_WEATHER,
        payload
    }
}

export const moviesResult = (payload) => {
    return {
        type: WEATHER_RESULT,
        payload
    }
}
export const addMoviesResult = (payload) => {
    return {
        type: ADD_WEATHER_RESULT,
        payload
    }
}

export const getMovies = () => {
    return {
        type: GET_WEATHER
    }
}

export const moviesError = (payload) => {
    return {
        type: WEATHER_ERROR,
        payload
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
}

export const endLoading = () => {
    return {
        type: END_LOADING,
    }
}