import React, { Component } from 'react';
import DataGrid from 'react-datagrid';

class ExperimentsTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            configurations: []
        };

        this.loadData();
    }

    render() {

        var columns = [
            { name: 'id' },
            { name: 'limit', title: 'limit' },
            { name: 'n_features', title: 'n_features' },
            { name: 'max_iter', title: 'max_iter' },
            { name: 'n_clusters', title: 'n_clusters' },
            { name: 'SilhouetteCoefficient' },
            { name: 'createdAt' },
            { name: 'preprocess' }
        ];

        return (
            <div>
                <button onClick={this.loadData.bind(this)}>Reload data</button>
                <div className="experiments-table">
                    <DataGrid
                        idProperty='id'
                        dataSource={this.state.configurations}
                        columns={columns}
                    />
                </div>
            </div>
        );
    }

    loadData() {

        this.setState({
            configurations: []
        });

        console.log('loadData');

        fetch("http://textmine-work1.ful.informatik.haw-hamburg.de/experiments")
        .then( (response) => {
            response.json().then( (data) => {
                this.prepareData(data);
            });
        });
    }

    prepareData(data) {

        let result = [];

        data.map( (config) => {
            var obj = {};
            obj.id = config.id;
            obj.copy_x = config.config.copy_x;
            obj.init = config.config.init;
            obj.limit = config.config.limit;
            obj.max_iter = config.config.max_iter;
            obj.n_clusters = config.config.n_clusters;
            obj.n_init = config.config.n_init;
            obj.n_jobs = config.config.n_jobs;
            obj.precompute_distances = config.config.precompute_distances;
            obj.random_state = config.config.random_state;
            obj.tol = config.config.tol;
            obj.verbose = config.config.verbose;
            obj.SilhouetteCoefficient = config.evaluation.SilhouetteCoefficient;
            obj.createdAt = config.createdAt;
            obj.preprocess = config.preprocess;
            obj.n_features = config.config.n_features;
            result.push(obj);
        } );

        this.setState({
            configurations: result
        });
    }
}

export default ExperimentsTable;
