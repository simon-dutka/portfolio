import React from 'react';
import '../../styles/pages/cv/cv.scss';

function Cv() {
    return (
        <section className='cv content'>
            <h2>Checkout my cv</h2>

            <a className='cv__button' href='/resume/resume.pdf'>
                PDF
            </a>
        </section>
    );
}

export default Cv;
