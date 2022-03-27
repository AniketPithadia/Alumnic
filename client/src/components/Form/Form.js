import React from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";
import RegisterForm from "./Register";
import LoginForm from "./Login";
import "./Form.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Form = () => {
  let params = useParams();
  console.log(params);
  return (
    <>
      <Header />
      <Router basename="/react-auth-ui/">
        <div className="form">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/login"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Log In&nbsp;&nbsp;
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Register
              </NavLink>
            </div>
            <div className="formTitle">
              <NavLink
                to="/login"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Log In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Register
              </NavLink>
            </div>{" "}
            {/* {params.userAuth === "login" ? <SignInForm /> : <SignUpForm />} */}
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/" exact>
              <RegisterForm />
            </Route>
          </div>
        </div>
      </Router>

      <Footer />
    </>
  );
};

export default Form;
