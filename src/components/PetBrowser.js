import React from 'react';
import Pet from './Pet'

// ({pets})

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="pet-display">
        {this.props.pets.map(pet => <Pet animal={pet} onAdoptPet={this.props.adoptAPet} />)}
      </div>
    )
  }
}

export default PetBrowser;