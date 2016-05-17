import React, {Component} from 'react';

class Experiment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <dl>
                        <dt>init</dt>
                        <dd>{this.props.config.init}</dd>
                        <dt>precompute_distances</dt>
                        <dd>{this.props.config.precompute_distances ? "true" : "false"}</dd>
                        <dt>copy_x</dt>
                        <dd>{this.props.config.copy_x ? "true" : "false"}</dd>
                        <dt>max_iter</dt>
                        <dd>{this.props.config.max_iter}</dd>
                        <dt>n_clusters</dt>
                        <dd>{this.props.config.n_clusters}</dd>
                        <dt>n_init</dt>
                        <dd>{this.props.config.n_init}</dd>
                        <dt>n_jobs</dt>
                        <dd>{this.props.config.n_jobs}</dd>

                        <dt>verbose</dt>
                        <dd>{this.props.config.verbose}</dd>
                    </dl>
                </div>
                <div className="col-md-9">
                    { this.props.data.map(function (d) {
                        return (
                            <div>
                                <b>Features/Cluster</b>
                                <p>{ d.features.toString() }</p>
                                <div>
                                    <ul className="list-group">
                                        { d.articles.map(function (article) {
                                            return (
                                                <li className="list-group-item">
                                                    <b>{ article.title }</b><br/>
                                                    <span>{ article.uri }</span>
                                                </li>
                                            );
                                        }) }
                                    </ul>
                                </div>
                            </div>
                        );
                    }) }
                </div>
                <hr/>
            </div>
        );
    }

}

export default Experiment;