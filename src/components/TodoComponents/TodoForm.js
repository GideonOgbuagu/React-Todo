import React, { Component } from 'react';

class TodoForm extends Component {
   

    render() {
        return (
            <div>
                <input type="text"/>
                <button>Add Todo</button>
                <button>Clear Todo</button>
            </div>
        )
    }
}


export default TodoForm;