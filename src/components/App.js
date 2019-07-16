import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilterType = (filterType) => {
    this.setState({
      filters: {
        type: filterType
      }
    })
  }

  fetchPets = () => {
    const url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setState({
        pets: pets
      }))
  }

  onAdoptPet = pet_id => {
    this.state.pets.forEach((pet, i) => {
      if (pet.id === pet_id) {
        const pets = [...this.state.pets];
        pets[i] = { ...pets[i], isAdopted: true };
        this.setState({ pets });
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
