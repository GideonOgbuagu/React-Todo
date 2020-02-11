import React from 'react'


const Todo = (props) => {
        return (
            <div onClick={() => props.toggleTodo(props.item.id)} className={props.item.completed ? 'completed': null}> 
                <p>{props.item.task}</p>                
            </div>
        )
}

export default Todo;