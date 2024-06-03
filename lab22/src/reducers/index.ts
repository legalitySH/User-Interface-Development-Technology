import {CombinedState, combineReducers, Reducer} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {Action, AppState} from "../types";

 const reducer = combineReducers<AppState>({
    todos,
    visibilityFilter
})
export default reducer