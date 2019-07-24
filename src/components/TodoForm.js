import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    newTodo: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.newTodo);
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state.newTodo);

    // Call action
  };

  render() {
    const { newTodo } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='newTodo'
          value={newTodo}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
