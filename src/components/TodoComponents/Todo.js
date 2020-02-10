import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <p>{this.props.item.task}</p>
                <button>Clear Todo</button>
            </div>
        )
    }
}
