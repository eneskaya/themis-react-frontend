import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

class Article extends Component {

  getDate(date) {
    return moment(this.props.date).format('D. MMMM, YYYY');
  }

  render() {

    return (

      <div className="article">
                <div className="article-block">
                    <div className="article-title">
                        <Link to={"/article/" + this.props.id} className="title-link">
                            {this.props.title}
                        </Link>
                    </div>
                    <div className="title-meta">
                        <span className="host col-xs-12">
                            <a href={this.props.uri} target="_blank" className="host-link">
                                {this.props.uri}
                            </a>
                        </span>
                    </div>
                    <div className="article-preview">
                        {this.props.content} ...
                    </div>
                    <div className="article-item-footer">
                        <span className="item-date-footer">
                            {this.getDate()} - {this.props.author}
                        </span>
                    </div>
                </div>
      </div>

    );
  }

}

export default Article;
