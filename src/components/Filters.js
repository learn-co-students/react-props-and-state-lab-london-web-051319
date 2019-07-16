import React from 'react'

class Filters extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onChangeType(event.target.value);
    console.log(event);
  }

  findNewPets = (event) => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          {/* <select name="type" id="type"> */}
          <select name="type" id="type" onChange={this.handleSubmit}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.findNewPets}>Find pets</button>
          {/* <button className="ui secondary button">Find pets</button> */}
        </div>
      </div>
    )
  }
}

export default Filters
