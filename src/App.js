import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import axios from 'axios';
import './App.css';
import NewsListComponent from './components/NewsList/NewsListComponent';

class App extends Component {
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
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NY Times Most Popular</NavbarBrand>
          </div>
        </Navbar>
        <NewsListComponent newsList={this.state.newsList}/>
      </div>
    );
  }
}

export default App;
