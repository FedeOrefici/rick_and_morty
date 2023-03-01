import { ADD_CARD, DELETE_CARD } from "./types"

const initialState = {
    myFavorites: [],
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CARD:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_CARD:
                let filter = state.myFavorites.filter((card) => card.id !== action.payload)
            return {
                ...state,
                myFavorites: filter,
            }
        default:
            return {...state};
    }
} 