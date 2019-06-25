import React, { Component } from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import axios from 'axios';
import NewsListComponent from '../NewsList/NewsListComponent';
import NewsDetailComponent from '../NewsDetail/NewsDetailComponent';
import HeaderComponent from '../Header/HeaderComponent';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          newsList: []
        }
      }
    
      componentDidMount() {
        axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=EZEc9hGk2Jmnjf4EYv9tl3VAl8E4YhfA`)
            .then(res => {
                const newsList = res.data.results.map(newsItem => (
                    {
                        id: newsItem.id,
                        title: newsItem.title,
                        author: newsItem.byline,
                        abstract: newsItem.abstract,
                        publishedDate: newsItem.published_date,
                        url: newsItem.url,
                        media: newsItem.media
                    }));
                this.setState({ newsList });
            });
    }
    

    render() {

        const NewsWithId = ({match})=> {
            return(
                <NewsDetailComponent selectedNewsItem={this.state.newsList.filter((news) => {
                    return news.id === parseInt(match.params.newsId)
                })[0]} />
            );
        }
        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path="/newslist/:newsId" component={NewsWithId} />
                    <Route exact path="/newslist" component={() => <NewsListComponent newsList={this.state.newsList} />} />
                    <Redirect to="/newslist" />
                </Switch>
            </div>
        );
    }


}

export default withRouter(MainComponent);