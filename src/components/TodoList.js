import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todo.map((todo, id) => {
            return <li key={id}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todo: state.todos };
};

export default connect(mapStateToProps)(TodoList);
