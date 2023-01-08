import React from 'react';
import '../../styles/components/navbar/navbar.scss';

// Images
import sun from '../../assets/sun.svg';

const NavbarContent = () => {
    return (
        <ul className='navbar__items-container'>
            <li className='navbar__items'>About</li>
            <li className='navbar__items'>Tech</li>
            <li className='navbar__items'>Projects</li>
            <li className='navbar__items'>Curriculum Vitae</li>
            <li className='navbar__items'>Contact</li>
        </ul>
    );
};

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <img
                    src={sun}
                    alt='Sun - light theme icon'
                    className='navbar__theme'
                />

                <NavbarContent />
            </nav>
        </>
    );
}

export default Navbar;
