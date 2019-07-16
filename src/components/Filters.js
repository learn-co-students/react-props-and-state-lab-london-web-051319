import React from 'react'

function Filters (props) {
  return (
    <div className='ui form'>
      <h3>Animal type</h3>
      <div className='field'>
        <select onChange={e => props.updateFilters(e.target.value)} name='type' id='type'>
          <option value='all'>All</option>
          <option value='cat'>Cats</option>
          <option value='dog'>Dogs</option>
          <option value='micropig'>Micropigs</option>
        </select>
      </div>
    </div>
  )
}

export default Filters