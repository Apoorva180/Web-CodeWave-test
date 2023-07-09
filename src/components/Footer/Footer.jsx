import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';// Custom styles for the component
import NavigationSvg from '../../assets/navigation.svg';
import SocialMedia from '../../assets2/social-media-icons.svg';

export const FooterBox = () => {
    return (
      <div className="footer">
    <div className="data">
      <div className="options">
        <div className="about">About</div>
        <div className="features">Features</div>
        <div className="pricing">Pricing</div>
        <div className="gallery">Gallery</div>
      </div>
      <div className="options1">
        <div className="about">Business</div>
        <div className="features">SEO</div>
        <div className="pricing">Blogs</div>
        <div className="gallery">Partners</div>
      </div>
      <div className="follow-us">
        <img
          className="social-media-icons"
          alt=""
          src={SocialMedia}
        />
        <div className="follow-us1">Follow Us</div>
      </div>
      <div className="high-level-experience">
        High level experience in crypto currencies and NFT’s knowledge,
        providing great profit.
      </div>
      <div className="susbcribe">
        <div className="email">
          <div className="email-child" />
          <div className="enter-your-email">Enter your email Address</div>
          <button className="button3">
            <div className="bg7" />
            <div className="get-started">Get Started</div>
          </button>
        </div>
        <b className="start-working-with">Start Working With Us</b>
      </div>
      <div className="logo">
        <div className="hovas">Hovas</div>
        <img className="d-logo-icon" alt="" src={NavigationSvg} />
   </div>
        </div>
        </div>
  );
};

export default FooterBox;