import React from 'react';

const Article = ({ props }) => (
    <div>
        <img src='/field.jpg'/>
        <div>
            <div className='article-category'>{props.category}</div>
            <div className='article-title'>{props.title}</div>
            <div className='article-text'>{props.text}</div>
        </div>
        <div className='div-link'>
            <a href='' className='text-link'>READ MORE</a>
        </div>
    </div>
)

export default Article