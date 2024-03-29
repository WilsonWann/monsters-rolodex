import { Component } from 'react'


class MonsterCard extends Component {
  render() {
    const { monster } = this.props

    return (
      <div>
        <h1>{monster.name}</h1>
      </div>
    );
  }
}

export default MonsterCard