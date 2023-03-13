import { ADD_CARD, DELETE_CARD, FILTER, ORDER, GET_CHARACTERS, GET_FAVORITES } from "./types"


const initialState = {
    myFavorites: [],
    allCharacters: []
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case GET_CHARACTERS:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }
        case ADD_CARD:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            }
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
            }
        case DELETE_CARD:
                // let filter = state.myFavorites.filter((card) => card.id !== action.payload)
            return {
                ...state,
                myFavorites: action.payload,
            }
        case FILTER:
            const filtered = state.allCharacters.filter((card) => card.gender === action.payload)
            return {
                ...state,
                myFavorites: filtered,
            }
        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente'
                    ? state.allCharacters.sort((a, b) => a.id - b.id)
                    : state.allCharacters.sort((a, b) => b.id - a.id)
        }
         default:
            return {...state};
    }
} 