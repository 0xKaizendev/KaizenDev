import React from 'react'
import Header from './header/';
import Skills from './skills';
import AboutKaizen from './about-kaizen';
import Projects from './projects';
const IndexContents = () => {
    return (
        <div className='space-y-6 overflow-auto '>
            <Header />
            <Skills />
            <AboutKaizen />
            <Projects />
        </div>
    )
}

export default IndexContents