import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { MailOutline, LockOutlined } from "@material-ui/icons";
import useInput from "../../hooks/use-input";
import AuthContext from "../../store/auth-context";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => {
    let re = /^[^A-Z,0-9,#][^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  });

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 6);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDG4dzhSlaCJqFGZp8c8Kjzl17ImgOA6FI",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            res.json().then((data) => {
              let errorMessage = "Authentication Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
                throw new Error(errorMessage);
              }
            });
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime + +data.expiresIn * 1000
          );
          authCtx.login(data.idToken, expirationTime.toString());
          history.replace("/");
        })
        .catch((err) => {
          alert(err.message);
          console.log(err);
        });
    }
    setTimeout(() => {
      resetEmailInput();
      resetPasswordInput();
    }, 2500);
  };
  const redirectHandler = () => {
    setTimeout(() => {
      history.replace("/");
    }, 2500);
  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={formSubmissionHandler}>
        <div className={emailInputClasses}>
          <label className="formFieldLabel" htmlFor="email">
            <MailOutline />
            <p>E-mail</p>
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="e.g johnsmith@gmail.com"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            autoComplete="off"
          />
          {emailInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>

        <div className={passwordInputClasses}>
          <label className="formFieldLabel" htmlFor="password">
            <LockOutlined />
            <p>Password</p>
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Your password"
            name="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            autoComplete="off"
          />
          {passwordInputHasError && (
            <p className="error-text">Password should 6 characters or more.</p>
          )}
        </div>

        <div className="form-control">
          {!isLoading && (
            <button
              type="submit"
              disabled={!formIsValid}
              onClick={redirectHandler}
              className="formFieldButton"
            >
              Login
            </button>
          )}
          {isLoading && (
            <button
              type="submit"
              disabled={!formIsValid}
              className="formFieldButton"
            >
              Loging in...
            </button>
          )}
          <Link to="/" className="formFieldLink">
            Don't have an Account? Create One
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
