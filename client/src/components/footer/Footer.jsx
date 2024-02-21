import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Pottery</span>
            <span>Jewellery</span>
            <span>Fashion</span>
            <span>Sculptures</span>
            <span>Paintings</span>
            <span>Instruments</span>
            <span>Data</span>
            
          </div>
          <div className="item">
            <h2>About</h2>
            {/* <span>Press & News</span> */}
            <span>Partnerships</span>
            <Link className='link' to="https://policies.google.com/privacy"><span>Privacy Policy</span></Link>
            
            <Link className='link' to="https://policies.google.com/terms"><span>Terms of Service</span></Link>
            {/* <span>Intellectual Property Claims</span>
            <span>Investor Relations</span> */}
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Memento</span>
            <span>Buying on Memento</span>
          </div>
          <div className="item">
            <h2>Community</h2>
          
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            
          </div>
          <div className="item">
            <h2>More From Memento</h2>
            <span>Memento Patents</span>
            <span>Memento AR Tech</span>
            <span>Memento Guides</span>
            <span>Get Inspired</span>
            <span>Memento Select</span>
           
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Memento</h2>
            <span>© This WebApp is protected by reCAPTCHA and Google</span>
          </div>
          <div className="right">
            {/* <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div> */}
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            {/* <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div> */}
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
