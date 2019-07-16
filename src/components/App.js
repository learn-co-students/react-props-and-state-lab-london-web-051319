import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { getAll, getByType, getBetweenAge } from '../data/pets'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
  filters: { type: 'all' },
  pets: getAll()
  }}

  updateFilters = (filter) => {
    this.setState({
      filters: { type: filter }
    })
  }
  
  render() {
  return (
    <div className='ui container'>
      <header>
        <h1 className='ui dividing header'>React Animal Shelter</h1>
      </header>
      <div className='ui container'>
        <div className='ui grid'>
          <div className='four wide column'>
            <Filters updateFilters={this.updateFilters} />
          </div>
          <div className='twelve wide column'>
            <PetBrowser pets={this.state.filters.type === 'all' ? getAll() : getByType(this.state.filters.type)} setAdopted={this.setAdopted}/>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default App

