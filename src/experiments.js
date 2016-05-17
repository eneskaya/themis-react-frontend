import React, { Component } from 'react';
import ExperimentsList from './components/ExperimentsList';

class Experiments extends Component {

  constructor(props) {
    super(props);
    this.initial();

    this.state = {
      configurations: []
    }
  }

  initial() {
    fetch("http://textmine-work1.ful.informatik.haw-hamburg.de/experiments")
      .then( (response) => {
        response.json().then( (data) => {
          this.setState({
            configurations: data
          });
          console.log(data);
        });
      });
  }

  render() {
    return (
      <div>
        <ExperimentsList experiments={this.state.configurations}></ExperimentsList>
      </div>
    );
  }
}

export default Experiments;
