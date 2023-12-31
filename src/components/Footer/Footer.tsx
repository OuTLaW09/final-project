import './Footer.scss';
import { Link } from 'react-router-dom';
import BackToTopImage from '../../assets/Images/backtotop.png';
import FooterTopImage from '../../assets/Images/footerImage.png';
import airplaneLogo from '../../assets/Images/travel.png';
import facebookFooter from '../../assets/Images/facebookFooter.png';
import instagramFooter from '../../assets/Images/instagramFooter.png';
import linkedinFooter from '../../assets/Images/linkedinFooter.png';
import { Popover } from 'antd';

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const contentContactUs = (
  <div>
    <p>Contact Numbers:</p>
    <p>+994705983905</p>
    <p>+994507619995</p>
  </div>
);

export const Footer = () => {
  return (
    <div className="footer-main">
      <div className="bottom-of-footer">
        <div className="content-of-bottom-footer">
          <div className="header-of-bottom-footer">
            <div className="logo-part-footer">
              <div className="travel-agent-footer">
                <span>Travel </span>
                <span>
                  <img alt="" src={airplaneLogo} className="airplane-logo" />
                </span>
                <span>Agency</span>
              </div>
              <div className="about-us-footer-main">
                <div className="middle-of-bottom-footer">
                  <div className="home-part-footer">
                    <a href="/">Home</a>
                    <Link to="login">Log in</Link>
                    <Link to="sign-up">Sign Up</Link>
                    <a href="/" className="about-us-footer">
                      About us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-of-bottom-footer-main">
              <div className="info-footer">
                Travel with us and enjoy to explore <br /> new places
              </div>
            </div>

            <div className="right-of-bottom-footer">
              <div className="get-in-touch-contact-us">
                <div className="get-in-touch">Get in touch</div>
             
                <Popover content={contentContactUs} title="Contact Us" trigger="click">
                <button className="contact-us-footer">Contact us</button>
                </Popover>
                
              </div>
              <div className="follow-us-part">
                <a href="/">Follow us</a>
                <div className="follow-us-logo-part">
                  <a href="https://www.instagram.com/" target='_blank'>
                    <img src={instagramFooter} alt="" />
                  </a>
                  <a href="https://www.facebook.com/" target='_blank'>
                    <img src={facebookFooter} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/" target='_blank'>
                    <img src={linkedinFooter} alt="" />
                  </a>
                </div>
              </div>
              <div className="last-part-footer">
                <div>
                  <a href="/">Privacy Policy</a>
                </div>
                <div>
                  <a href="/">All rights revered 2023 @Travel Agency</a>
                </div>
                <div>
                  <a href="/">Terms&Conditions</a>
                </div>
              </div>
            </div>
          </div>
          <div className="top-of-footer">
            <img alt="" src={FooterTopImage} className="footer-top-image" />
            <div className="back-to-top">
              <Link to="/">
                <button onClick={topFunction}>
                  <img alt="" src={BackToTopImage} className="backto-top-image" />
                </button>
              </Link>
              <p>Back to top</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
