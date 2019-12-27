import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility'

const initState={
    activePagination:1
}

const activePagination=(state, action)=>{
    return updateObject(state, {activePagination:action.active})
}

const PaginationReducer=(state=initState, action)=>{
    switch(action.type){
        case actionTypes.SET_ACTIVE_PAGINATION:
            return activePagination(state, action)
        default:
            return state
    }
}

export default PaginationReducer