import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const newsArticles = useSelector(state => state.news);

    const changeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        console.log(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
    <div className='newsletter-container'>
        <img src='bigHouse.jpg'/>
        <div className='newsletter-content'>
            <span className='newsletter-title'>
                Sign up for our newsletter
            </span>
            <span className='newsletter-text'>
                {newsArticles[0].text}
            </span>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Your email"
                    value={email || ""} 
                    onChange={changeEmail}
                />
                <input type="submit" value="Sign Up"/>
            </form>
            <span className='newsletter-terms'>
                {`${newsArticles[1].text} `}
                <a href='' className='terms-link'>Privacy Statement</a>
            </span>
        </div>
    </div>
    ) 
}

export default Newsletter