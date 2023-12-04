import './Footer.scss';
import FooterTopImage from '../../assets/Images/footerImage.png';
import BackToTopImage from '../../assets/Images/up-arrrows.png';
import { Link } from 'react-router-dom';

export const Footer =()=>{
    return(
        <div className="footer-main">
            <div className="top-of-footer">
                <img src={FooterTopImage} className='footer-top-image' />
                <div className="back-to-top">

                    <Link to=''><img src={ BackToTopImage} className='backto-top-image' /></Link>
                    <p className='back-to-top-p'>Back to top</p>
                </div>
               

            </div>
            <div className="bottom-of-footer">
                <div className='content-of-bottom-footer'>
                    <div className='header-of-bottom'>
                        <div>Travel Agency</div>
                        <div>Lorem Ipsum jfjfjfjf</div>
                        <div className="get-in-touch">Get in touch</div>
                    </div>
                    <div className="middle-of-bottom-footer">
                        <a href="">Home</a>
                        <a href="">About us</a>
                        <a href="">Follow us</a>
                    </div>

                </div>

            </div>

        
        
        </div>
    )

}