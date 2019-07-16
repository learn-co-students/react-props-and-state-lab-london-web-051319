import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {for(const pet of this.pets) {
          <Pet onAdoptPet={this.renderPets}/>
        }}
      </div>
    )
  }
}

export default PetBrowser
