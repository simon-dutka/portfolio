import React from 'react';

import '../../styles/pages/about/about.scss';

import line from '../../assets/line.svg';

function About() {
    return (
        <div className='about content'>
            <h2 className='about__heading'>About me</h2>

            <div className='about__text-container'>
                <img src={line} alt='' />
                <p className='about__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam porttitor tellus aliquet enim laoreet, a suscipit est
                    auctor. Sed rhoncus posuere felis, nec euismod mauris
                    egestas vel. Maecenas et imperdiet nibh, ut vulputate lorem.
                    Morbi pulvinar dolor metus, nec ultricies justo convallis
                    ac. Maecenas accumsan, lectus sed commodo tempor,
                </p>
            </div>
        </div>
    );
}

export default About;
