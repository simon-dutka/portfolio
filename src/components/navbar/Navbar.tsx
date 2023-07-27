import React, { useState } from 'react';
import '../../styles/components/navbar/navbar.scss';

// Images
import sun from '../../assets/sun.svg';

// Icons
import about from '../../assets/navbar_icons/about.svg';
import tech from '../../assets/navbar_icons/tech.svg';
import projects from '../../assets/navbar_icons/projects.svg';
import resume from '../../assets/navbar_icons/resume.svg';
import contact from '../../assets/navbar_icons/contact.svg';

const NavbarContent = () => {
    return (
        <ul className='navbar__items-container'>
            <li className='navbar__items'>
                <a href='#about'>About</a>
            </li>
            <li className='navbar__items'>
                <a href='#tech'>Tech</a>
            </li>
            <li className='navbar__items'>
                <a href='#projects'>Projects</a>
            </li>
            <li className='navbar__items'>
                <a href='#Resume'>Resume</a>
            </li>
            <li className='navbar__items'>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    );
};

function Navbar() {
    const iconsNavbar = [
        {
            src: about,
            alt: 'about',
            title: 'about',
        },
        {
            src: tech,
            alt: 'tech',
            title: 'tech',
        },
        {
            src: projects,
            alt: 'projects',
            title: 'projects',
        },
        {
            src: resume,
            alt: 'resume',
            title: 'resume',
        },
        {
            src: contact,
            alt: 'contact',
            title: 'contact',
        },
    ];

    const [resolution, setResolution] = useState(window.innerWidth);

    const checkMobile = () => {
        setResolution(window.innerWidth);
    };

    window.addEventListener('resize', checkMobile);

    return (
        <>
            {resolution <= 800 ? (
                <nav className='navbar__bottom'>
                    {iconsNavbar.map((el, id) => (
                        <img
                            className='navbar__bottom-icon'
                            src={el.src}
                            title={el.title}
                            alt={el.alt}
                            key={id}
                        />
                    ))}
                </nav>
            ) : (
                <nav className='navbar'>
                    <img
                        src={sun}
                        alt='Sun - light theme icon'
                        className='navbar__theme'
                    />

                    <NavbarContent />
                </nav>
            )}
        </>
    );
}

export default Navbar;
