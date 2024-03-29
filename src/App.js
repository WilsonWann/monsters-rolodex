import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

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
        <SearchBox
          className="monsters-search-box"
          placeholder='search monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );

  }
}

export default App;