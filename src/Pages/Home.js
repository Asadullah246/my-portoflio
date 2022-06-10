import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Skills></Skills>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;