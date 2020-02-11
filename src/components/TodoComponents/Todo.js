import React from 'react'
import './Todo.css'


const Todo = (props) => {
        return (
            <div onClick={() => props.toggleTodo(props.item.id)} className={props.item.completed ? 'completed': null}> 
                <p>{props.item.task}</p>                
            </div>
        )
}

export default Todo;
