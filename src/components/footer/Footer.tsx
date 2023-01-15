import React from 'react';
import '../../styles/components/footer/footer.scss';

// Images
import github from '../../assets/github.svg';
import email from '../../assets/email.svg';
import linkedin from '../../assets/linkedin.svg';

let socialData = [
    {
        icon: github,
        altText: 'Link to my github account',
        href: '#',
    },
    {
        icon: email,
        altText: 'Link to write me an email ',
        href: '#',
    },
    {
        icon: linkedin,
        altText: 'Link to my linkedin profile',
        href: '#',
    },
];

let socialContent: JSX.Element[] = [];

socialData.forEach((el, id) => {
    socialContent.push(
        <a href={el.href} key={id}>
            <img src={el.icon} alt={el.altText} />
        </a>
    );
});

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__language'>Switch to polish</p>
            <div className='footer__social'>{socialContent}</div>
        </footer>
    );
}

export default Footer;
