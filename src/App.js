import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState({ searchField })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }))
  }

  render() {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    )

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder='search monsters'
          onChange={onSearchChange}
        />
        {
          filteredMonsters.map((monster) =>
            <MonsterCard key={monster.id} monster={monster} />)
        }

      </div>
    );

  }
}

export default App;
class MonsterCard extends Component {

  constructor(props) {
    super(props)
    // console.log("🚀 ~ MonsterCard ~ constructor ~ props:", props)
    this.state = {
      monster: props.monster,
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.monster.name}</h1>
      </div>
    );
  }
}

