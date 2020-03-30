import React from 'react';

import { HeaderConstants } from 'common/constants';
import './Header.scss'

const Header = (props) => {

    return (
        <div className='header-wrapper'>
            <div className='header-nav-bar'>
                <a className='header-title' href='/'>
                    <span className='header-logo-icon'></span>
                    <span className='title'>{HeaderConstants.KABOODLE}</span>
                </a>
                <div className='header-vertical-line'></div>
                <div className='header-tagline'>{HeaderConstants.TAGLINE}</div>
                <a className='header-sign-up' href='/'>
                    <span className="user-icon"></span>
                    <span className='sign-up'> {HeaderConstants.SIGN_UP}</span>
                </a>
                <a className='header-log-in' href='/'>
                    <span className="user-2-icon"></span>
                    <span className='log-in'> {HeaderConstants.LOG_IN}</span>
                </a>
                <a className='header-about' href='/'>
                    <span className='about-icon'></span>
                    <span className='about'>{HeaderConstants.ABOUT}</span>
                </a>
            </div>
            <div className='header-base'>
                <span className='title'>{HeaderConstants.KABOODLE}</span>
                <span className='logo'></span>
            </div>
        </div >
    );
}

export default Header;