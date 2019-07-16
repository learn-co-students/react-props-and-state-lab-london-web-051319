import React from 'react'

function Pet (props) {

  let adopted = props.pet.isAdopted

  return (
    <div className='card'>
      <div className='content'>
        <a className='header'>
          {props.pet.gender === 'female' ? '♀' : '♂'}
          {props.pet.name}
        </a>
        <div className='meta'>
          <span className='date'>{props.pet.type}</span>
        </div>
        <div className='description'>
          <p>Age: {props.pet.age}</p>
          <p>Weight: {props.pet.weight}</p>
        </div>
      </div>
      <div className='extra content'>
        {adopted
          ? <button className='ui disabled button'>Already adopted</button>
          : <button className='ui primary button' onClick={() => (adopted = true)}>Adopt pet</button>}
      </div>
    </div>
  )
}

export default Pet