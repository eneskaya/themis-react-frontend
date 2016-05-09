import React, { Component } from 'react';

class Article extends Component {

  render() {
    return (
      <div class="article col-md-8 col-md-offset-2">
                <div class="col-md-8 article-block">
                    <div class="article-title">
                        <a href="#" title="Panderom Gabaled Hidaemd" class="title-link">
                            {this.props.title}
                        </a>
                    </div>
                    <div class="title-meta">
                        <span class="host">
                            <a href="#" class="host-link">
                                {this.props.link}
                            </a>
                        </span>
                        <span class="author">
                            - {this.props.author}
                        </span>

                    </div>
                    <div class="article-preview">
                        {this.props.content}
                    </div>
                    <div class="article-item-footer">
                        <span class="item-date-footer">
                            {this.props.date}
                        </span>
                    </div>
                </div>
      </div>

    );
  }

}

export default Article;
