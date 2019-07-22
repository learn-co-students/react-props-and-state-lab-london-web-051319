import React from 'react';

// ({onChangeType, onFindPetsClick, type})

class Filters extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.onChangeType(e);
  };

  render() {
    const {onChangeType, onFindPetsClick, type} = this.props;
    return (
      <div>
        <select onChange={(e) => this.handleClick(e)} value={type}>
          <option key="1" value='all'>All</option>
          <option key="2" value="cat">Cat</option>
          <option key="3" value="dog">Dog</option>
          <option key="4" value="micropig">Micropig</option>
        </select>
        <button onClick={onFindPetsClick}>Get Pets!</button>
      </div>
    )
  }
}

export default Filters;