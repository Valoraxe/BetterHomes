import React from 'react';
import { useSelector } from 'react-redux';

const Vision = () => {
    const newsArticles = useSelector(state => state.news);

    return (
    <div className='ways-container'>
        <div className='ways-content'>
            <div className='ways-title'>
                Ways to Buy
            </div>
            <div className='ways-text'>
                {`${newsArticles[0].text} ${newsArticles[1].text} ${newsArticles[2].text}`}
            </div>
            <div>
                <button className='home-button'>FIND OUT WHY</button>
            </div>
        </div>
        <div className='ways-right'>
            <img src='/bigHouse.jpg'/>
        </div>
    </div>
    ) 
}

export default Vision