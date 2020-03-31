import React from 'react';

import { FooterConstants } from 'common/constants';
import './Footer.scss';

const Footer = (props) => {

    return (
        <div className='footer-wrapper'>
            <div className='footer-middle-bar'>
                <a className='footer-title' href='/'>
                    <span className='title'>
                        {FooterConstants.KABOODLE}
                    </span>
                </a>
                <div className='footer-nav-bar'>
                    <a href='/'>
                        <span className='frequently-asked-question'>
                            {FooterConstants.FAQ}
                        </span>
                    </a>
                    <span className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </span>
                    <a href='/'>
                        <span className='feedback'>
                            {FooterConstants.FEEDBACK}
                        </span>
                    </a>
                    <span className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </span>
                    <a href='/'>
                        <span className='contact'>
                            {FooterConstants.CONTACT}
                        </span>
                    </a>
                    <span className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </span>
                    <a href='/'>
                        <span className='terms-conditions'>
                            {FooterConstants.TERMS_CONDITIONS}
                        </span>
                    </a>
                    <span className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </span>
                    <a href='/'>
                        <span className='privacy-policy'>
                            {FooterConstants.PRIVACY_POLICY}
                        </span>
                    </a>
                </div>
                <div className='footer-copyright'>
                    <span>
                        {FooterConstants.COPYRIGHT}
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Footer;