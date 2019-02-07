import React, { Component } from 'react';
import Login from './Login/Login'
import News from './News/News'
import './App.css';

class App extends Component {
  state = {
    logged: false,
    username : '',
    news : []
  }

  componentDidMount () {
    this.getNews()
  }

  getNews = async () => {
    try {
      const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b653cdcecd4d4677b407524ef9f62d02';
      const news = await fetch(url)
      if (!news.ok) {
        throw Error(news.statusText)
      }
      const newsParsedJson = await news.json();
      console.log(newsParsedJson.articles[0].title);
      console.log(newsParsedJson.articles[0].author);
      console.log(newsParsedJson.articles[0].description);
      this.setState({
        news: newsParsedJson.articles
      })
      

    } catch (err) {
      console.log(err, 'in error block')
    }
  }

  handleLogin = (username) => {
    console.log(username)
    this.setState({
      username : username,
      logged: true
    })
  }
  render() {
    return (
      <div className="App">
      {this.state.logged ? <News username={this.state.username} news={this.state.news} /> : <Login handleLogin={this.handleLogin}/>}

      </div>
    );
  }
}

export default App;
