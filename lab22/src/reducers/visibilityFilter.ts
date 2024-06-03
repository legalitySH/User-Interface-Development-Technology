import {Action, VisibilityFilters} from '../types'

const visibilityFilter = (state: VisibilityFilters = VisibilityFilters.SHOW_ALL, action : Action):VisibilityFilters => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter