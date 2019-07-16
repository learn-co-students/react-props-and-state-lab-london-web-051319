import React from 'react'

import Pet from './Pet'

function PetBrowser (props) {
  return props.pets.map(pet =>
    <div className='ui cards'><Pet pet={pet}/></div>
  )
}

export default PetBrowser
