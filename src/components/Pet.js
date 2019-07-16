import React from 'react';

class Pet extends React.Component {
  render() {
    let adoptBtn;

    if (this.props.pet.isAdopted) {
      adoptBtn = <button className="ui disabled button">Already adopted</button>;
    } else {
      adoptBtn = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>;
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
             {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptBtn}
        </div>
      </div>
    );
  }
}

export default Pet;
