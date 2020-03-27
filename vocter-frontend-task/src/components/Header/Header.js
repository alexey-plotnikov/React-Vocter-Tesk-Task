import React from 'react';

import {HeaderConstants} from 'common/constants';
import './Header.css'

const Header = (props) => {

    return (
        <div className='header-wrapper'>
            <div className='header-title'>
                {HeaderConstants.KABOODLE}
            </div>
            <div className='header-tagline'>
                {HeaderConstants.TAGLINE}
            </div>
            <div className='header-sign-up'>
                {HeaderConstants.SIGHT_UP}
            </div>
            <div className='header-log-in'>
                {HeaderConstants.LOG_IN}
            </div>
            <div className='header-about'>
                {HeaderConstants.ABOUT}
            </div>
        </div>
    );
}

export default Header;