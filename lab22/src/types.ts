import visibilityFilter from "./reducers/visibilityFilter";
import VisibilityFilter from "./reducers/visibilityFilter";

export type TodoActionType = 'ADD_TODO' | 'TOGGLE_TODO' | 'SET_VISIBILITY_FILTER';

export interface AddTodoAction {
    type: 'ADD_TODO';
    id: number;
    text: string;
}

export interface ToggleTodoAction {
    type: 'TOGGLE_TODO';
    id: number;
}

export interface SetVisibilityFilterAction {
    type: 'SET_VISIBILITY_FILTER';
    filter: VisibilityFilters;
}

export type Action = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction;


export interface Todo {
    id: number;
    completed: boolean;
    text: string;
}

export interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

export interface TodoState {
    todos: Todo[];
}

export enum VisibilityFilters {
    SHOW_ALL= 'SHOW_ALL',
    SHOW_COMPLETED= 'SHOW_COMPLETED',
    SHOW_ACTIVE= 'SHOW_ACTIVE'
}
export interface VisibilityState {
    visibilityFilter: VisibilityFilters;
}

export interface AppState extends TodoState, VisibilityState {}
