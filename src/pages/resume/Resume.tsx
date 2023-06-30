import React from 'react';
import '../../styles/pages/resume/resume.scss';

function Resume() {
    return (
        <section className='resume content'>
            <h2>Checkout my resume</h2>

            <a className='resume__button' href='/resume/resume.pdf'>
                PDF
            </a>
        </section>
    );
}

export default Resume;
