import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
    this.state = {
            name: ''
        }
    }

    render() {
        return (
            <div>
                <p>Buy Groceries</p>
            </div>
        )
    }
}

export default TodoList;

