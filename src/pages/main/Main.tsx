import React from 'react';
import '../../styles/pages/main/main.scss';

// Images imports
import rectangleLeft from '../../assets/rectangle_left.svg';
import rectangleRight from '../../assets/rectangle_right.svg';

const MainContent = () => (
    <div id='home' className='main'>
        <div className='main__content'>
            <img src={rectangleLeft} alt='' className='main-left' />

            <h1 className='main-text'>
                Hello world, {'\n'}
                I'm Simon
            </h1>

            <img src={rectangleRight} alt='' className='main-bottom' />
        </div>
    </div>
);
function Main() {
    return (
        <>
            <MainContent />
        </>
    );
}

export default Main;
