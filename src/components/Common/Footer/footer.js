import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        Amay Crypto<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/amay-nayak-6185871a2/">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="mailto:mailamaynayak@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://x.com/amaynayak08">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/amaynayak08/?next=%2F">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;