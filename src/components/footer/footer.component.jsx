import React from 'react';
import { connect } from 'react-redux';

import './footer.styles.scss';

import logo from '../../svg/logo.svg';
import twitter from '../../svg/Social/Twitter.svg';
import linkedIn from '../../svg/Social/Linkedin.svg';
import google from '../../svg/Social/Google.svg';
import facebook from '../../svg/Social/Facebook.svg';

const Footer = ({ isMobile }) => {
  return (
    <div className={`footer ${isMobile ? 'mobile' : ''}`}>
      <div className='footer-content'>
        <div>
          <div className='logo'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='footer-twitter'>
            <img src='/assets/png/Twitter embed.png' alt='Twitter embed' />
          </div>
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
  );
};

const mapStateToProps = state => ({
  isMobile: state.isMobile,
});

export default connect(mapStateToProps)(Footer);
