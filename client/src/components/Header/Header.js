import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const params = useParams();
  const authCtx = useContext(AuthContext);
  let userLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    //  showMessage(true);
    //  setTimeout(() => {
    //    showMessage(false);
    //  }, 2500);
  };

  return (
    <React.Fragment>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img src={logo} alt="Alumnic" />
        </div>
        <div className={styles.links_container}>
          <li>
            <NavLink exact to="/" activeClassName={styles.active}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" activeClassName={styles.active}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={styles.active}>
              Contact
            </NavLink>
          </li>
        </div>

        <Link to="/form">
          <button className={styles.form_button} type="button">
            Log In&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; Sign Up
          </button>
        </Link>
        {/* <Link to="/form/register">
            <button className={styles.form_button} type="button">
              Sign Up
            </button>
          </Link> */}
      </div>
    </React.Fragment>
  );
};
export default Header;
