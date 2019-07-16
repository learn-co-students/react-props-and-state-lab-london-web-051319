import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all',
      },
    };
  }

  updateFilter = e => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value,
      },
    });
  };

  fetchPets = () => {
    let filter = this.state.filters.type;
    if (filter === 'all') {
      this.filterAll();
    } else {
      this.filterSpecies(filter);
    }
  };

  filterAll = (animalName) => {
    fetch('/api/pets')
     .then(res => res.json())
     .then(pets => this.setState(pets));
  };

  filterSpecies = (animal) => {
    fetch(`/api/pets?type=${animal}`)
     .then(res => res.json())
     .then(pets => {
        this.setState({ pets });
      }
     );
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        pet.isAdopted = true;
        return pet;
      } else {
        return pet;
      }
    });

    this.setState({ pets });
  };

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
                onChangeType={this.updateFilter}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
