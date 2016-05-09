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

        <div>
          <ul className="pager-links">
            <li className="pager-prev">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.getPrevArticles.bind(this)}>Prev</button>

            </li>
            <li className="pager-next">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.getNextArticles.bind(this)}>Next</button>

            </li>
          </ul>
          <div className="clearfix"></div>
        </div>

        <ArticlesList
          articles={this.state.currentArticles}>
        </ArticlesList>

        <div>
          <ul className="pager-links">
            <li className="pager-prev">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.getPrevArticles.bind(this)}>Prev</button>

            </li>
            <li className="pager-next">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.getNextArticles.bind(this)}>Next</button>

            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }

}

export default App;
