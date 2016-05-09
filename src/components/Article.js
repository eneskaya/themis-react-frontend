import React, { Component } from 'react';
import moment from 'moment';

class Article extends Component {

  getDate(date) {
    return moment(this.props.date).format('D. MMMM, YYYY');
  }

  render() {

    return (

      <div className="article">
                <div className="article-block">
                    <div className="article-title">
                        <a href={this.props.uri} target="_blank" title={this.props.title} className="title-link">
                            {this.props.title}
                        </a>
                    </div>
                    <div className="title-meta">
                        <span className="host col-xs-4">
                            <a href={this.props.uri} target="_blank" className="host-link">
                                {this.props.uri}
                            </a>
                        </span>
                        <span className="author col-xs-8">
                            - {this.props.author}
                        </span>

                    </div>
                    <div className="article-preview">
                        {this.props.content} ...
                    </div>
                    <div className="article-item-footer">
                        <span className="item-date-footer">
                            {this.getDate()}
                        </span>
                    </div>
                </div>
      </div>

    );
  }

}

export default Article;
