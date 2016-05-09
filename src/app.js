import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import ArticlesList from './components/ArticlesList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentArticles: []
    }

    this.initial();
  }

  initial() {

    fetch('http://textmine-work1.ful.informatik.haw-hamburg.de/api/articles?limit=30&page=1')
      .then( (response) => {
        response.json().then( (data) => {
          this.setState({
            currentArticles: data.data,
            count: data.count,
            nextLink: data.cursor.next,
            prevLink: data.cursor.previous
          });
        });
      })
      .catch( (res, err) => {
        alert("Something went terribly woooong!");
      });

  }


  getNextArticles() {

    fetch(this.state.nextLink)
      .then( (response) => {
          response.json().then( (data) => {
            this.setState({
              currentArticles: data.data,
              count: data.count,
              nextLink: data.cursor.next,
              prevLink: data.cursor.previous
            });
          });
          window.scrollTo(0,0);
      });

  }

  getPrevArticles() {

    fetch(this.state.prevLink)
      .then( (response) => {
          response.json().then( (data) => {
            this.setState({
              currentArticles: data.data,
              count: data.count,
              nextLink: data.cursor.next,
              prevLink: data.cursor.previous
            });
            window.scrollTo(0,0);
          });
      })
      .catch();
  }

  render() {

    return(
      <div>
        <ArticlesList
          articles={this.state.currentArticles}>
        </ArticlesList>
        <hr />
        <ul className="pager-links">
          <li>
            <a
              onClick={this.getPrevArticles.bind(this)}>
              Prev
            </a>
          </li>
          <li>
            <a
              onClick={this.getNextArticles.bind(this)}>
              Next
            </a>
          </li>
        </ul>
      </div>
    );
  }

}

export default App;
