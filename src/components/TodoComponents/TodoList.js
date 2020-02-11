import React from 'react';
import Todo from './Todo';

const TodoList = props => {

        return (
            <div>
                {props.todos.map(item => (
                    <Todo key={item.id} item={item} toggleTodo={props.toggleTodo} />
                ))}
                <button onClick={props.clearCompleted}>Clear Completed Todo</button>
            </div>
        )
    
}

export default TodoList;

