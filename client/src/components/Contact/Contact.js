import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";
import Header from "../Header/Header";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import backgroundImage from "../../assets/images/contact-background.jpg";
import { LinkedIn } from "@material-ui/icons";
function Contact() {
  const [sendMessage, setSendMessage] = useState(false);

  const contactFormHandler = (event) => {
    event.preventDefault();
  };
  const sendButtonHandler = () => {
    setSendMessage(true);
    setTimeout(() => {
      setSendMessage(false);
    }, 1000);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="contact-container">
        <div className="contact-header">
          <p>CONTACT</p>
          <h1>Get in touch with us</h1>
          <p className="contact-description">
            We appreciate your feedback .Your response is quite valuable to us,
            because it helps us in improving our customer experience. Below are
            the details to contact us on different platforms and a feedback form
            to relay your remarks your experience on the portal.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-col">
            <h3>Online platforms</h3>
            <p>
              We aim to solve your problems and inconvience majorly throughly
              these differenct social media and online portals. So ping us!!
            </p>
            <div className="social-icons">
              <div>
                <a
                  href="https://www.instagram.com/alumnicnetwork/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/alumnicnetwork/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/AlumnicNetwork" target="_blank">
                  <TwitterIcon />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCM5aSVKqaw8fdlXmSFptyCw"
                  target="_blank"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-col">
            <h3>Customer helpline</h3>
            <p>
              If you want to contact us about any query, feel free to dial us up
              on below number and we'll help you through it.
            </p>
            <div>
              <p>Tol Free : 1800-1800-1900</p>
              <p>Email Id : alumnic357@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <div className="contact-form-left">
            <img
              className="con-form-img"
              src={backgroundImage}
              alt="cherries and leaves"
            />
          </div>
          <div className="contact-form-right">
            <form className="con-form" onSubmit={contactFormHandler}>
              <div className="contact-heading">
                <h2>Feedback & Reviews</h2>
                <p>Do let us know what you liked and disliked</p>
              </div>
              <div className="con-form-control">
                <label htmlFor="name">
                  <AccountCircleRoundedIcon /> Name
                </label>
                <input type="text" id="name" autoComplete="off" />
              </div>
              <div className="con-form-control">
                <label htmlFor="email">
                  <MailOutlineRoundedIcon />
                  Email
                </label>
                <input type="email" id="email" autoComplete="off" />
                {/* <label className="formFieldLabel" htmlFor="degree">
                  <p>Choose type of degree</p>
                </label>
                <input
                  list="userType"
                  className=""
                  name="userType"
                  placeholder="Choose your Who are you?"
                  id="userType"
                />
                <datalist id="userType">
                  <option value="College Authority" />
                  <option value="MSDE Authority" />
                  <option value="Alumni" />
                </datalist> */}
              </div>
              <div className="con-form-textarea">
                <textarea
                  id="message"
                  rows={10}
                  cols={25}
                  autoComplete="off"
                  placeholder="Your Message goes here..."
                ></textarea>
              </div>
              <div className="con-form-actions">
                <button onClick={sendButtonHandler}>
                  <SendRoundedIcon />
                  {sendMessage ? "Message Sent!!" : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
