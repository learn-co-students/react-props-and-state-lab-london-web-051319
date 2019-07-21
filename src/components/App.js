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

  updateFilter = (type) => {
    this.setState({
      filters: {type}
      }
    )
  }

  getPets = () => {
    console.log('hi')
    const url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url).then(response => response.json()).then(pets => this.setState({ pets: pets }))
  }

  onAdoptPet = (pet_id) => {
    console.log(pet_id)
   const pets = this.state.pets.map(pet => {
     if (pet.id === pet_id){
       pet.isAdopted = true
       console.log(pet.name)
       console.log(pet.isAdopted)
       return pet
     } else {
       return pet;
     }
   })
   this.setState(({ pets }))
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
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
