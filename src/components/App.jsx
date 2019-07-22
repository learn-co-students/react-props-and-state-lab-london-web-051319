import React, {Component} from 'react';
import '../App.css';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

// const PETS_URL = '/api/pets';
const PETS_URL = 'http://localhost:3000/allPets';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: "all"
    }
  }

  // This changes the state in the current Component
  changeType = (event) => {
    this.setState({
      filters: event.target.value
    });
  }

  // This is the start of the fetch request, the first method sorts the type and the triggers the appropriate fetch.
  // ***********************************************************************
  findPets = async () => {
    let type = this.state.filters;
    type === "all" ? this.getAllPets() : this.getSpecificPets(type);
  }

  getAllPets = async () => {
    const petData = await fetch(PETS_URL);
    const petDataJSON = await petData.json();
    this.setState({pets: petDataJSON});
  }

  getSpecificPets = async (type) => {
    const petData = await fetch(`${PETS_URL}?type=${type}`);
    const petDataJSON = await petData.json();
    this.setState({pets: petDataJSON});
  }
  // end of fetch ***********************************************************

  // This is where we update the DOM and the server respectively. Note that DOM updates should be done automatically from the state array of all pets. To update that array with the changes made, we use a map function as below. It does NOT make a fetch request. 

  adoptDOM = (petID) => { // THIS IS HOW YOU UPDATE THE DOM
    const amendedPets = this.state.pets.map(pet => {
      return (pet.id === petID) ? {...pet, isAdopted: true} : pet
    })
    this.setState({pets: amendedPets});
  }

  adoptPet = async (id, status) => { // THIS IS HOW YOU UPDATE THE SERVER
    console.log("adopting", id, status)
    const configOpt = { 
      method: 'PATCH', // PATCH request updates existing data
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({"isAdopted": status})
    };

    const updatePetData = await fetch(`${PETS_URL}/${id}`, configOpt);
    const newPetDataJSON = await updatePetData.json();
    this.adoptDOM(id) 
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>Welcome to the World's Most Wonderful Pet Shelter</h1>
        </header>
        <main>
          <Filters 
          onChangeType={this.changeType} 
          onFindPetsClick={this.findPets}
          type={this.state.filters}
          />
          <PetBrowser pets={this.state.pets} adoptAPet={this.adoptPet}/>
        </main>
      </div>
    )
  }
}