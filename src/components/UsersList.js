import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/usersAction";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h3>User List</h3>
        <ul>
          {this.props.users.map((user, id) => {
            return <li key={id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
