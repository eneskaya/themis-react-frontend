import React, { Component } from 'react';

class Experiments extends Component {

  constructor(props) {
    super(props);
    this.initial();

    this.state = {
      configurations: []
    }
  }

  initial() {
    fetch("http://textmine-work1.ful.informatik.haw-hamburg.de/api/experiments")
      .then( (response) => {
        response.json().then( (data) => {
          this.setState({
            configurations: data
          });
        });
      });
  }

  render() {

    console.log(this.state.configurations);

    return (
      <div>
        <ul>
          { this.state.configurations.map( function(config) {
            return (
              <li key={config.id}>
                {config.config.toString()}
              </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default Experiments;
