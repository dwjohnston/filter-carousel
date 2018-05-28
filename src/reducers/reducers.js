import * as ActionTypes from "../actions/actionTypes";

const initialState = {
    popularItems: [],
    featuredItems: [], 
    searchTerm: null, 
}

export default function reducers(state = initialState, action) {

    switch (action.type){
        case ActionTypes.POPULATE_FEATURED_ITEMS : 
            return {...state, featuredItems: action.data}; 
        case ActionTypes.POPULATE_POPULAR_ITEMS : 
        return {...state, popularItems: action.data}; 
        case ActionTypes.UPDATE_SEARCH : 
        return {...state, searchTerm: action.searchTerm}; 
        default: return {...state}; 
    }
}