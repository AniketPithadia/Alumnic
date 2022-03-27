import React from "react";
import Header from "../Header/Header";
import styles from "./Homepage.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Testimonial from "./Testimonials/Testimonial";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <div className={styles.homepage}>
        <Header />
        <div className={styles.intro}>
          <div className={styles.heading}>
            <span className={styles.sub_heading}>
              Welcome
              <br />
              to
            </span>{" "}
            <h1>Alumnic</h1>
            <p>
              <em>"Find and help other alumni like you"</em>
            </p>
          </div>

          <div className={styles.buttons}>
            <input type="text" placeholder="Find Alumni" id="find" />
            <SearchIcon />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Homepage;
