import React, {Component} from 'react';
import Article from './Article';

class ArticlesList extends Component {

    render() {

        var articles = this.props.articles;

        return (
            <div>

                { articles.map(function (article) {
                    return (<Article
                        key={article.id}
                        title={article.title}
                        uri={article.url}
                        author={article.author}
                        content={article.content}
                        date={article.date.date}
                        id={article.id}
                    >
                    </Article>);
                })}

            </div>

        );
    }

}

export default ArticlesList;
