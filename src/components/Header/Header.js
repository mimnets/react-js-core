import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <a href='/home'>Home</a>
                <a href='/shop'>Shop</a>
                <a href='/about'>About</a>
            </nav>
            <h2>This is the header</h2>
        </div>
    );
};

export default Header;