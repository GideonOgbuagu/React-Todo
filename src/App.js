import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

    toggleTodo = clickedId => {
      // const newTodoList = this.state.todos.map(item => {
      //   if(item.id === clickedId) {
      //     return {
      //       ...item,
      //       completed: !item.completed
      //     } 
      //   } else {
      //     return item;
      //   }
      // })

      this.setState({
        todos: this.state.todos.map(item => {
          if(item.id === clickedId) {
            return {
              ...item,
              completed: !item.completed
            } 
          } else {
            return item;
          }
        })
      });
  };

  addNewItems = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
    }
    
  

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItems={this.addNewItems}/>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App
