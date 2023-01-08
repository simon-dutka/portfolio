import React from 'react';

import '../../styles/pages/main/main.scss';

import { Page } from '../../components/index';

import level1 from '../../assets/levels/level1.svg';
import rectangleLeft from '../../assets/rectangle_left.svg';
import rectangleRight from '../../assets/rectangle_right.svg';

const MainContent = () => (
    <>
        <div className='main'>
            <img src={rectangleLeft} alt='' className='main-top' />

            <h1 className='main-center'>
                Hello world, {'\n'}
                I'm Simon
            </h1>

            <img src={rectangleRight} alt='' className='main-bottom' />
        </div>
    </>
);

function Main() {
    return (
        <>
            <Page level={level1} content={<MainContent />} />
        </>
    );
}

export default Main;
