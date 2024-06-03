import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Action} from "../types";

interface AddTodoProps {
    dispatch: (action: Action) => void
}

const AddTodo : React.FC<AddTodoProps> = ({ dispatch }) => {
    let input : HTMLInputElement | null

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (input && !input.value.trim()) {
                        return
                    }
                    if (input) {
                        dispatch(addTodo(input.value))
                        input.value = ''
                    }
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)