import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Latest from './Latest';
import Vision from './Vision';
import News from './News';
import Footer from './Footer';
import Ways from './Ways';
import Newsletter from './Newsletter';

const HomePage = () => (
    <div className="site-container">
        <Header/>
        <Logo/>
        <Vision/>
        <Latest/>
        <Ways/>
        <Newsletter/>
        <News/>
        <Footer/>
    </div>
)

export default HomePage