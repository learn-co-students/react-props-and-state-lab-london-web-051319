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

  updateState = (filter) => {
    this.setState({
        filters: {
          ...this.state.filters, type: filter}
    });
  } // nested states require either a spread operator or an Object.assign

  getPets = async () => {
    let petFilter = this.state.filters.type;
    let petURL = (petFilter === "all") ? "/api/pets" : `/api/pets?type=${petFilter}`;
    const getMyPets = await fetch(petURL);
    const petsJSON = await getMyPets.json();
    this.setState({
      pets: petsJSON
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
              <Filters 
              onChangeType={this.updateState}
              onFindPetsClick={this.getPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
