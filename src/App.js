import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((item, key) => {
          return <h2 key={key}>{item.name}</h2>;
        })}
      </div>
    );
  }
}
