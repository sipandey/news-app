import React, { Component } from 'react';
import { Media } from 'reactstrap';
import NewsDetailComponent from '../NewsDetail/NewsDetailComponent';

class NewsListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNewsItem: {}
        }
    }

    onNewsItemSelect(news) {
        this.setState({
            selectedNewsItem: news
        })
    }

    render() {
        const newsList = this.props.newsList.map((news) => {
            return (
                <div key={news.id} className="col-12 m-1">
                    <Media className="border p-3" onClick={() => this.onNewsItemSelect(news)}>
                        <Media left middle href="#">
                            <Media object className="mr-3 mt-1 rounded-circle" src={news.media[0]['media-metadata'][0].url} alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading>
                                {news.title}
                            </Media>
                            {news.author}
                        </Media>
                    </Media>
                </div>

            );
        });

        return (
            <div className="container">
                <div className="row">
                    {newsList}
                </div>
                <NewsDetailComponent selectedNewsItem={this.state.selectedNewsItem} />
            </div>
        );
    }
}

export default NewsListComponent;