import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5 pt-4 border-top shadow-sm">
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h4 className="fw-bold mb-1">Eshop</h4>
            <p className="mb-0 small">&copy; {currentYear} Eshop. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="/privacy" className="text-light text-decoration-none me-3 hover-underline">Privacy Policy</a>
            <a href="/terms" className="text-light text-decoration-none hover-underline">Terms & Conditions</a>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="row">
          <div className="col text-center">
            <span className="me-3">Follow us:</span>
            <a href="https://facebook.com" className="text-light me-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-light me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-light me-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-light">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
