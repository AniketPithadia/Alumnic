import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.first_row}>
        <div className={styles.col_about}>
          <div className={styles.first_title}>Alumnic</div>
          <div className={styles.description}>
            Alumnic is portal for alumni from various colleges and universities
            who are in search of guidance,interships,job-opporunities,etc. This
            web-app helps such alumni to get in touch with each other and help
            one another towards brighter future.
          </div>
        </div>
        <div className={styles.columns}>
          <div>
            <div className={styles.second_title}>Resources</div>
            <div className={styles.link_title}>
              <div>
                <a href="#" target="_blank" className={styles.resources}>
                  About
                </a>
              </div>
              <div>
                <a href="#" target="_blank" className={styles.resources}>
                  Contact
                </a>
              </div>
              <div>
                <a href="#" target="_blank" className={styles.resources}>
                  Careers
                </a>
              </div>
              <div>
                <a href="#" target="_blank" className={styles.resources}>
                  Admin
                </a>
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.second_title}>Legal</div>
            <div className={styles.link_title}>
              <div>
                <a href="#" target="_blank" className={styles.resources}>
                  Privacy
                </a>
              </div>
              <div>
                <a href="#" target="_blank" className={styles.resources}>
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.social_media_col}>
        <div className={styles.stay_connected_title}>Stay connected</div>
        <div className={styles.social_media}>
          <a
            href="https://www.instagram.com/alumnicnetwork/"
            target="_blank"
            className={styles.socialMediaLogo}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/alumnicnetwork/"
            target="_blank"
            className={styles.socialMediaLogo}
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/AlumnicNetwork"
            target="_blank"
            className={styles.socialMediaLogo}
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCM5aSVKqaw8fdlXmSFptyCw"
            target="_blank"
            className={styles.socialMediaLogo}
          >
            <YouTubeIcon />
          </a>
        </div>
        <div className={styles.copyright}>
          Copyright &copy; 2022 All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
