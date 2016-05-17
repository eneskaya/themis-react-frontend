import React, {Component} from 'react';
import Experiment from './Experiment';

class ExperimentsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let experiments = this.props.experiments;
        let counter = 0;

        return (
            <div>
                { experiments.map(function (experiment) {
                    counter++;
                    return (
                        <Experiment
                            key={experiment.id}
                            config={experiment.config}
                            data={experiment.data}
                            number={counter}
                        />
                    );
                })}
            </div>
        );
    }

}

export default ExperimentsList;