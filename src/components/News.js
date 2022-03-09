import React from 'react';
import { useSelector } from 'react-redux';
import Article from './Article';

const News = () => {
    const newsArticles = useSelector(state => state.news);

    return (
        <div className='news-container'>
            <h2 className='sub-title'>LATEST NEWS</h2>

            <div className='article-container'>
                {newsArticles.map(article => (
                    <div className="article-item" key={article.id}>
                        <Article props={article}/>
                    </div>
                ))}
            </div>

            <div>
                <button className='home-button'>VIEW ALL NEWS</button>
            </div>
        </div>
    )
}

export default News