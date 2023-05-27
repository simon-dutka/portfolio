import React from 'react';
import '../../styles/pages/cv/cv.scss';

function Cv() {
    return (
        <section className='cv content'>
            <h2>Checkout my cv</h2>

            <button className='cv__button'>
                <a href='/resume/resume.pdf'>PDF</a>
            </button>
        </section>
    );
}

export default Cv;
