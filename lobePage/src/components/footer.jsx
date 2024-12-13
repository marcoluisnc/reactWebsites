import '../style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube  } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        <div className="footer-container">
            <div className="first-sec">
                <h3>Lobe</h3>
                <p>A product by Microsoft.</p>
                <p>All rights reserved.</p>
                <p>Microsoft 2021</p>
            </div>
            <div className="second-sec">
                <h3>About</h3>
                <p>Download</p>
                <p>Overview</p>
                <p>Examples</p>
                <p>Blog</p>
            </div>
            <div className="third-sec">
                <h3>General</h3>
                <p>Notice</p>
                <p>Licence</p>
                <p>Press Inquiry</p>
                <p>Press Images</p>
            </div>
            <div className="fourth-sec">
                <h3>Resources</h3>
                <p>Help</p>
                <p>Tour</p>
                <p>Contact</p>
                <p>Privacy</p>
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Footer