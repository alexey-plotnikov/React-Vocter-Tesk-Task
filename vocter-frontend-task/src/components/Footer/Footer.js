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
                        <span>
                            {FooterConstants.FAQ}
                        </span>
                    </a>
                    <div className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </div>
                    <a href='/'>
                        <span>
                            {FooterConstants.FEEDBACK}
                        </span>
                    </a>
                    <div className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </div>
                    <a href='/'>
                        <span>
                            {FooterConstants.CONTACT}
                        </span>
                    </a>
                    <div className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </div>
                    <a href='/'>
                        <span>
                            {FooterConstants.TERMS_CONDITIONS}
                        </span>
                    </a>
                    <div className='footer-vertical-line'>
                        {FooterConstants.VERTICAL_LINE}
                    </div>
                    <a href='/'>
                        <span>
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