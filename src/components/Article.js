import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import {Modal,Button, OverlayTrigger, Tooltip} from 'react-bootstrap';

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    getDate(date) {
        return moment(this.props.date).format('D. MMMM, YYYY');
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {

        const tooltip = (
            <Tooltip id="readarticle">Read article</Tooltip>
        );

        return (

            <div className="article">
                <div className="article-block">
                    <div className="article-title">
                        <OverlayTrigger placement="left" overlay={tooltip}>
                            <a onClick={this.open.bind(this)} className="title-link">
                                {this.props.title}
                            </a>
                        </OverlayTrigger>
                    </div>
                    <div className="title-meta">
                        <span className="host col-xs-12">
                            <a href={this.props.uri} target="_blank" className="host-link">
                                {this.props.uri}
                            </a>
                        </span>
                    </div>
                    <div className="article-preview">
                        {this.props.content[0]} ...
                    </div>
                    <div className="article-item-footer">
                        <span className="item-date-footer">
                            {this.getDate()} - {this.props.author}
                        </span>
                    </div>
                </div>

                <Modal show={this.state.showModal} bsSize="large" onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        <br/>
                        <small className="text-muted">By {this.props.author}</small>
                        <p>{this.getDate()} - {this.props.author}</p>
                    </Modal.Header>
                    <Modal.Body>
                        { this.props.content.map(function (paragraph) {
                            return (
                                <p>{paragraph}</p>
                            );
                        }) }
                    </Modal.Body>
                </Modal>
            </div>

        );
    }

}

export default Article;
