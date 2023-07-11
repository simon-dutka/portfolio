import React from 'react';
import '../../styles/pages/contact/contact.scss';

import outline from '../../assets/outline.svg';

function Contact() {
    return (
        <section className='contact content contact__content'>
            <h2 className='contact__heading'>Contact</h2>

            <p className='contact__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                porttitor tellus aliquet enim laoreet, a suscipit est auctor.
                Sed rhoncus posuere
            </p>

            <form className='contact__form' action='' method='post'>
                <div className='contact__form-first-line'>
                    <input
                        className='contact__form-input contact__form-input--short'
                        type='text'
                        name='firstName'
                        placeholder='First name'
                    />

                    <input
                        className='contact__form-input contact__form-input--short'
                        type='text'
                        name='lastName'
                        placeholder='Last name'
                    />
                </div>

                <input
                    className='contact__form-input'
                    type='email'
                    name='email'
                    placeholder='Email'
                />

                <input
                    className='contact__form-input'
                    type='message'
                    name='message'
                    placeholder='Message'
                />

                <div className='contact__form-button-container'>
                    <img
                        className='contact__form-button-image'
                        src={outline}
                        alt=''
                    />
                    <button className='contact__form-button' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
