import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

class NewsListComponent extends Component {

    render() {
        const newsList = this.props.newsList.map((news) => {
            return (
                <div key={news.id} className="col-12 m-1">
                    <Link to={`/newslist/${news.id}`}>
                        <Media className="border p-3">
                            <Media middle>
                                <Media object className="mr-3 mt-1 rounded-circle" src={news.media[0]['media-metadata'][0].url} alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                                <Media heading>
                                    {news.title}
                                </Media>
                                {news.author}
                            </Media>
                        </Media>
                    </Link>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {newsList}
                </div>
            </div>
        );
    }
}

export default NewsListComponent;