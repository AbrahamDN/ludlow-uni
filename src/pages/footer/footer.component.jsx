import React from 'react';

import './footer.styles.scss';

import { ReactComponent as Logo } from '../../svg/logo.svg';
import twitter from '../../svg/Social/Twitter.svg';
import linkedIn from '../../svg/Social/Linkedin.svg';
import google from '../../svg/Social/Google.svg';
import facebook from '../../svg/Social/Facebook.svg';

const Footer = ({ ...props }) => {
  return (
    <div {...props}>
      <div className='footer'>
        <div className='footer-content'>
          <div>
            <Logo />
          </div>
          <div className='footer-twitter'>
            <p>Twitter Embed</p>
          </div>
          <div className='footer-socials'>
            <div className='footer-socials-list'>
              <img src={twitter} alt='Twitter' />
              <img src={linkedIn} alt='Linked-In' />
              <img src={google} alt='Google' />
              <img src={facebook} alt='Facebook' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
