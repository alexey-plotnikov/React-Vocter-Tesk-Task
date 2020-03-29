import React from 'react';

import { HeaderConstants } from 'common/constants';
import './Header.scss'

const Header = (props) => {

    return (
        <div className='header-wrapper'>
            <div className='header-nav-bar'>
                <a className='header-title' href='/'>
                    <span className='icon-header-logo'></span>
                    <span className='title'>{HeaderConstants.KABOODLE}</span>
                </a>
                <div className='header-vertical-line'></div>
                <div className='header-tagline'>{HeaderConstants.TAGLINE}</div>
                <a className='header-sign-up' href='/'>
                    <span className="icon-user"></span>
                    <span className='sign-up'> {HeaderConstants.SIGN_UP}</span>
                </a>
                <a className='header-log-in' href='/'>
                    <span className="icon-user-2"></span>
                    <span className='log-in'> {HeaderConstants.LOG_IN}</span>
                </a>
                <a className='header-about' href='/'>
                    <span className='icon-about'></span>
                    <span className='about'>{HeaderConstants.ABOUT}</span>
                </a>
            </div>
            <div className='header-base'></div>
        </div >
    );
}

export default Header;