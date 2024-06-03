import React from 'react'
import Todo from './Todo'
import {TodoListProps} from "../types";

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map((todo) => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)


export default TodoList