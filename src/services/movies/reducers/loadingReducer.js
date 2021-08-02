import {HIDE_LOADER, SHOW_LOADER} from "../actions/actionTypes";

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        default: return state
    }
}