import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';// Custom styles for the component
import NavigationSvg from '../../assets/navigation.svg';
import Illustration from '../../assets/illustration.svg';
import Video from '../../assets/video.svg';
import bg from "../../assets/bg1.svg";
export const Header = () => {
  return (
    <header className="header">
      <img className="bg-icon1" alt="" src={bg} />
      <img className="illustration-icon" alt="" src={Illustration} />
      <div className="video">
      <div className="text7">
        <b className="lets-get-started">Let’s get started!</b>
        <div className="watch-this-quick">
          Watch this quick demo video to see how to get started.
        </div>
        </div>
        <img className="icon" alt="" src={Video} />
        </div>
      <div className="heading-content">
        <div className="best-nft-collection">
          Best nft collection freelance services online. Outsource your nft
          collection project and get it quickly done and delivered remotely
          online.
        </div>
        <b className="cryptocurrency-just-got-container">
          <span className="cryptocurrency-just-got-container1">
            <p>Cryptocurrency</p>
            <span className="just-got-even"> just got even better</span>
          </span>
        </b>
      </div>
      <div className="navigation">
        <div className="button-log-in">
          <div className="button-log-in-child" />
          <div className="log-in">Log In</div>
        </div>
        <div className="button-find-loan">
          <div className="button-find-loan-child" />
          <div className="sign-up">Sign Up</div>
        </div>
        <div className="menu">
          <div className="meno">
            <div className="home">Home</div>
            <div className="services">Services</div>
            <div className="creators">Creators</div>
            <div className="about1">About</div>
          </div>
          <div className="menu-child" />
        </div>
        <div className="logo1">
          <div className="hovas1">Hovas</div>
          <img className="d-logo-icon1" alt="" src={NavigationSvg} />
        </div>
      </div>
    </header>
  );
};

export default Header;

   