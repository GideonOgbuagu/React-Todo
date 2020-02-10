import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: '',
          id: 1828,
          completed: false
        }
      ]
    }
  }

    toggleTodo = clickedId => {
      const newTodoList = this.state.todos.map(item => {
        if(item.id === clickedId) {
          return {
            ...item,
            completed: !item.completed
          } 
        } else {
          return item;
        }
      })

      this.setState({
        todos: newTodoList
      });
  };

  addNewItems = itemText => {
    const newItem = {
        task: itemText,
        id: Date.now(),
        completed: false
    };
    this.setState({
      newTodos: [...this.state.todos, newItem]
    })
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItems={this.addNewItems}/>
        <TodoList todos={this.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
