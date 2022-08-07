import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Imaginary Plaza, Sekertek Road 11, Mohammadpur, Dhaka</p>
        <p className="p__opensans">+880 1234-567890</p>
        <p className="p__opensans">+880 9876-543210</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__brand-logo">Sundor</p>
        <p className="p__opensans">&quot;A place where you&apos;ll be delighted in every bite.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">09:00 AM - 11:00 PM</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">09:00 AM - 05:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans copyright__footnote-top">2022 Sundor&copy;. All Rights reserved.</p>
      <p className="copyright__footnote-bottom">Sundor is a fictional resturant and this website is used only for the sole purpose of demonstrating Abu Muid Rafie&apos;s Front-end development skills using React.js Framework</p>
    </div>

  </div>
);

export default Footer;
