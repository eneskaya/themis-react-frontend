import React, { Component } from 'react';

class Article extends Component {

  render() {
    return (
      <div className="article col-md-8 col-md-offset-2">
                <div className="col-md-8 article-block">
                    <div className="article-title">
                        <a href={this.props.uri} target="_blank" title="Panderom Gabaled Hidaemd" className="title-link">
                            {this.props.title}
                        </a>
                    </div>
                    <div className="title-meta">
                        <span className="host">
                            <a href={this.props.uri} target="_blank" className="host-link">
                                {this.props.uri}
                            </a>
                        </span>
                        <span className="author">
                            - {this.props.author}
                        </span>

                    </div>

                    <div className="article-item-footer">
                        <span className="item-date-footer">
                            {this.props.date}
                        </span>
                    </div>
                </div>
      </div>

    );
  }

}

export default Article;
