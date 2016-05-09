import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import ArticlesList from './components/ArticlesList';

class App extends Component {

  render() {
    return(
      <div>
        <SearchBox></SearchBox>
        <ArticlesList articles={[{ date: "12341234", author: "ENES KAYA", title: "Der Titel", uri: "http://nytimes.com", content: "Inhalt" }]}></ArticlesList>
      </div>
    );
  }

}

export default App;
