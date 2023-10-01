import { SET_CATEGORY, SET_SEARCH } from "./constants"

const initialState = {
    category: '',
    search: '',
}

export default function productReducer(state=initialState, {type, payload}){

    switch(type){
        case SET_CATEGORY:
            return { ...state, category: payload}
        case SET_SEARCH:
            return { ...state, search: payload }
        default:
            return state
    }
}