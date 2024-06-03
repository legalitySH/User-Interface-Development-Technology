import React from 'react'
import {Todo as TodoType} from '../types';

interface TodoProps extends TodoType {
    onClick:()=>void;
}


const Todo : React.FC<TodoProps> = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)


export default Todo