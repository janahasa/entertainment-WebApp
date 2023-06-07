import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="social-icons">
          <a href="https://www.facebook.com/janna.ah.50?mibextid=LQQJ4d" target="_blank">
          <li className="face">
            <i className="fa-brands fa-facebook-f"></i>
          </li>
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
          <li className="pinterest">
            <i className="fa-brands fa-pinterest-p"></i>
          </li>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
          <li className="twitter">
            <i className="fa-brands fa-twitter "></i>
          </li>
          </a>
          <a href="https://www.linkedin.com/in/jana-hasan/" target="_blank">
          <li className="linkedin">
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
          </a>
        </ul>
  
        <span>Copyright © 2023 Jana Alhasan.</span>
  
      </div>
    </footer>
  );
}

export default Footer
