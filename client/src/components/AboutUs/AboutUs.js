import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./AboutUs.module.css";
import image1 from "../../assets/images/recruiter.jpg";
import image2 from "../../assets/images/alumniConnection.jpg";
const AboutUs = () => {
  return (
    <>
      <Header />
      <div className={styles.about_container}>
        <div className={styles.about_header}>
          <p>WHO WE ARE</p>
          <h1>About us</h1>
          <p className={styles.history}>
            Alumnic is a web portal for all alumni across India to connect with
            each other after they graduate from their respective college. This
            portal was built with aim of helping and connecting the alumni with
            recruiters , college authorites and other professional to provide
            alumni with different opporunities.
          </p>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureImage}>
              <img src={image2} alt="Connecting Alumni Picture" />
            </div>
            <div className={styles.featureDes}>
              <h2>Connecting Alumni across India</h2>
              <p>
                We are providing freshly graduated students or long-term alumni
                with a web portal built with latest technology to connect them
                with other alumni across india so that they can help, guide and
                learn from each other.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureDes}>
              <h2>Job Opporunities for Alumni from across India</h2>
              <p>
                Using our portal recruiters form across India can connect with
                alumni with different job opporunities.Alumni can also cold
                mail/message a particular recruiter for job opporunities or
                improve their network.
              </p>
            </div>
            <div className={styles.featureImage}>
              {" "}
              <img src={image1} alt="Recruiting Opporunities" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
