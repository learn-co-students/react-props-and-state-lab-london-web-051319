import React, {Component} from 'react';

// ({animal, onAdoptPet})

class Pet extends Component {
  // Note that there is NO state included in this component. All updates were processed inside the App component.
  // As there was only a render function in this app, it was not necessary to create a class component, we could have made do with a functional component instead.

  //this handleClick was not actually required, as only one command was passed. Event was also not required.
  // handleClick = (event, animal) => {
  //   this.props.onAdoptPet(animal.id, !animal.isAdopted)
  // } 

  render() {
    return (
      <div key={this.props.animal.id} className="card-wrap">
        <div className="ui card">
            <div className="content">
              <h1 className="header">{this.props.animal.name}</h1>
              <div className="description">
                <p>Age: {this.props.animal.age}</p>
                <p>Type: {this.props.animal.type}</p>
                <p>Weight: {this.props.animal.weight}</p>
              </div>
            </div>
            <div className="extra content">
          {this.props.animal.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              // onClick={(e) => this.handleClick(e, this.props.animal)}
              onClick={() => this.props.onAdoptPet(this.props.animal.id, !this.props.animal.isAdopted)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
          </div>
        </div>
    )
  }
}

export default Pet;