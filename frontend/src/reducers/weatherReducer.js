import {GET_WEATHER, SET_LOADING, WEATHER_RESULT, WEATHER_ERROR, END_LOADING, ADD_WEATHER_RESULT, ADD_WEATHER} from '../constants/moviesConstant'

let initialState = {
    moviesData: [], 
    loading: false, 
    error: null
}

export const moviesReducer = (state = initialState, action) => {
  console.log(action.payload)
    switch (action.type) {
        case GET_WEATHER:
          return {
            ...state,
            loading: true,
            moviesData: [],
            error: null
          }
        case ADD_WEATHER:
          return {
            ...state,
            loading: false,
            moviesData: state.moviesData,
            error: null
          }
        case SET_LOADING:
          return {
            ...state,
            loading: null
          }
        case WEATHER_RESULT:
          return {
            ...state,
            loading: false,
            moviesData: action.payload,
            error: null          
          }
        case ADD_WEATHER_RESULT:
          return {
            ...state,
            loading: false,
            moviesData: state.moviesData.length > 0 ? [...state.moviesData, action.payload] : [action.payload],
            error: null          
          }
        case WEATHER_ERROR: 
          return {
            ...state,
            moviesData: [],
            loading: false,
            error: action.payload
          }
        case END_LOADING: 
          return {
            ...state,
            loading: false
          }
        default:
            return state;
    }
} 