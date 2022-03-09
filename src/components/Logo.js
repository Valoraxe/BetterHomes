import React from 'react';
import SearchBox from './SearchBox';

const Logo = () => (
    <div className='image-container home'>
        <div className='home-content'>
            <h1 className='title'>Building Better Homes</h1>
            <p className='home-message'>
                Really smart technology and sustainability are the heart of every home we build
            </p>
            <button className='home-button'>FIND OUT WHY</button>
            <SearchBox/>
        </div>
    </div>
)

export default Logo