import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredField: "",
    };
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

  onSearchChange = (e) => {
    const filteredField = e.target.value.toLowerCase();

    this.setState(() => {
      return { filteredField };
    });
  };

  render() {
    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.filteredField);
    });

    return (
      <div className="App">
        <input
          className="search"
          type="search"
          placeholder="search mosnter"
          onChange={this.onSearchChange}
        />
        {filteredMonster.map((item, key) => {
          return <h2 key={key}>{item.name}</h2>;
        })}
      </div>
    );
  }
}
