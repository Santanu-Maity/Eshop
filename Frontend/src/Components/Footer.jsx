import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-3 p-3 border-top shadow-sm">
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h4 className="fw-bold mb-1">Eshop</h4>
            <p className="mb-0 small">&copy; {currentYear} Eshop. All rights reserved.</p>
            <p className="mb-0 small">Mail Us: support@eshop.com</p>
            <p className="mb-0 small">Registered Office: Baruipur, South 24 Parganas, West Bengal</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="/privacy" className="text-light text-decoration-none me-3 hover-underline">Privacy Policy</a>
            <a href="/TnC" className="text-light text-decoration-none hover-underline">Terms & Conditions</a>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="row">
          <div className="col text-center">
            <span className="me-3">Follow us:</span>
            <a href="https://facebook.com" className="text-light me-2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="text-light me-2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="text-light me-2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
