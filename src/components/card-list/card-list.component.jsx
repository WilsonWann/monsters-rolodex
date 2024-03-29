import { Component } from 'react'
import MonsterCard from '../monster-card/monster-card.component'

class CardList extends Component {

  render() {
    const { monsters } = this.props

    return (
      <div>
        {
          monsters.map((monster) =>
            <MonsterCard key={monster.id} monster={monster} />)
        }
      </div>
    )

  }
}


export default CardList