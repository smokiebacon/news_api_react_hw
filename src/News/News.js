import React from 'react';


const News = ({news}) => {
        const newsList = news.map((articles, i) => {
            return (
                <div>
                <li key={i}>{articles.title}</li>
                <li key={i+1}>{articles.author}</li>
                <li key={i+2}>{articles.description}</li>
              </div>
            )
        })
  
        return (
            <div id="info">
            <h1>News</h1>
            <ul>
                {newsList}
            </ul>
            </div>

        )
    }


export default News;