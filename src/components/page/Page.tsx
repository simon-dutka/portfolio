import React from 'react';

import '../../styles/components/page/page.scss';

import { Navbar, Footer } from '../index';

const Page = (props: any) => (
    <div className='page'>
        <Navbar />

        <div className='page__content-container'>
            <img src={props.level} className='page__level' />

            <div className='page__content'>{props.content}</div>
        </div>

        <Footer />
    </div>
);

export default Page;
