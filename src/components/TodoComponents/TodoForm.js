import React, { Component } from 'react';

class TodoForm extends Component {
   constructor() {
       super();
       this.state = {
           newTask: ''
       }
   }

   handleChanges = e => {
       this.setState({
           newTask: e.target.value
       })
   }

   handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItems(this.state.newTask);
    this.setState({newTask: ''});
  };

    render() {
        return (
            <div>
                <input type="text" name="newItem" value={this.handleChanges} />
                <button>Add Todo</button>
                <button>Clear Todo</button>
            </div>
        )
    }
}


export default TodoForm;