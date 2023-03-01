import { ADD_CARD, DELETE_CARD } from "./types"

export const addCard = (character) => {
    return {
        type: ADD_CARD,
        payload: character,
    }
}

export const deleteCard = (id) => {
    return {
        type: DELETE_CARD,
        payload: id,
    }
}