import React, { Component } from "react";

export default class Users extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response.json();
      })
      .then((items) => {
        this.setState(
          () => {
            return { users: items };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    return <div></div>;
  }
}
