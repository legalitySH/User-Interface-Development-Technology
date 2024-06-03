import {AddTodoAction, ToggleTodoAction, SetVisibilityFilterAction, VisibilityFilters} from "../types";

let nextTodoId = 0


export const addTodo = (text: string) :AddTodoAction => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = (filter: VisibilityFilters):SetVisibilityFilterAction => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id: number):ToggleTodoAction => ({
    type: 'TOGGLE_TODO',
    id
})



