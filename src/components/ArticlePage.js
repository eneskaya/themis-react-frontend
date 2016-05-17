import React, {Component} from 'react';
import { Link } from 'react-router';

class ArticlePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: [],
            author: '',
            date: '',
            url: ''
        };

        this.getArticle();
    }

    getArticle() {

        fetch('http://textmine-work1.ful.informatik.haw-hamburg.de/articles/' + this.props.params.id)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        title: data.title,
                        content: data.content,
                        author: data.author,
                        date: data.date,
                        url: data.url
                    });
                });
            })
            .catch((res, err) => {
                alert("Something went terribly woooong!");
            });

    }

    render() {
        return (
            <div>
                <Link to="/"> &larr; Back to Overview </Link>
                <article>
                    <h2>{ this.state.title }</h2>
                    <small> By { this.state.author } </small>
                    <br/>
                    <small className="text-muted"> Original: { this.state.url } </small>
                    <br/>
                    <br/>
                    { this.state.content.map(function (paragraph) {
                        return (
                            <p>{paragraph}</p>
                        );
                    }) }
                </article>
            </div>
        );
    }
}

export default ArticlePage;