import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import serverEndpoint from "../../endpoints";

const RegisterForm = () => {
  const history = useHistory();
  const [docImg, setDocImg] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const upload = (item) => {
    const fileName = new Date().getTime() + item.label + item.file.name;
    const storageRef = ref(storage, `/products/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, item.file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDocImg(url);
          setUploaded((prev) => prev + 1);
        });
      }
    );
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload({ file: docImg, label: "img" });
  };

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

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
  } = useInput((value) => value.length >= 8);

  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput((value) => value.length > 6 && value === enteredPassword);
  const {
    value: enteredMobileNumber,
    isValid: enteredMobileNumberIsValid,
    hasError: mobileNumberInputHasError,
    valueChangeHandler: mobileNumberChangeHandler,
    inputBlurHandler: mobileNumberBlurHandler,
    reset: resetMobileNumberInput,
  } = useInput((value) => value.length === 10);
  const {
    value: enteredPassingYear,
    isValid: enteredPassingYearIsValid,
    hasError: passingYearInputHasError,
    valueChangeHandler: passingYearChangeHandler,
    inputBlurHandler: passingYearBlurHandler,
    reset: resetPassingYearInput,
  } = useInput((value) => value <= 2099 && value >= 1950);

  const {
    value: enteredCollege,
    isValid: enteredCollegeIsValid,
    hasError: collegeInputHasError,
    valueChangeHandler: collegeChangeHandler,
    inputBlurHandler: collegeBlurHandler,
    reset: resetCollegeInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDegree,
    isValid: enteredDegreeIsValid,
    hasError: degreeInputHasError,
    valueChangeHandler: degreeChangeHandler,
    inputBlurHandler: degreeBlurHandler,
    reset: resetDegreeInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredBranch,
    isValid: enteredBranchIsValid,
    hasError: branchInputHasError,
    valueChangeHandler: branchChangeHandler,
    inputBlurHandler: branchBlurHandler,
    reset: resetBranchInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredDocumentUrl,
    isValid: enteredDocumentUrlIsValid,
    hasError: documentUrlInputHasError,
    valueChangeHandler: documentUrlChangedHandler,
    inputBlurHandler: documentUrlBlurHandler,
    reset: resetDocumentUrlInput,
  } = useInput((value) => value !== null);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPassword &&
    enteredPassingYearIsValid &&
    enteredDegreeIsValid &&
    enteredBranchIsValid &&
    enteredCollegeIsValid &&
    enteredDocumentUrlIsValid
  ) {
    formIsValid = true;
  }
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!isLogin) {
    } else {
      fetch(serverEndpoint + "/signup", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          console.log(res);
        } else {
          res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
              alert(errorMessage);
            }
          });
        }
      });
    }
    setTimeout(() => {
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetPasswordInput();
      resetConfirmPasswordInput();
      resetMobileNumberInput();
      resetCollegeInput();
      resetDegreeInput();
      resetBranchInput();
      resetPassingYearInput();
      resetDocumentUrlInput();
    }, 1500);
  };
  const redirectHandler = () => {
    // setTimeout(() => {
    //   // history.replace("/login");
    // }, 2500);
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";
  const confirmPasswordInputClasses = confirmPasswordInputHasError
    ? "form-control invalid"
    : "form-control";
  const passingYearInputClasses = passingYearInputHasError
    ? "form-control invalid"
    : "form-control";
  const mobileNumberInputClasses = mobileNumberInputHasError
    ? "form-control invalid"
    : "form-control";
  const collegeInputClasses = collegeInputHasError
    ? "form-control invalid"
    : "form-control";
  const degreeInputClasses = degreeInputHasError
    ? "form-control invalid"
    : "form-control";
  const branchInputClasses = branchInputHasError
    ? "form-control invalid"
    : "form-control";
  const documentUrlInputClasses = documentUrlInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <div className="formCenter">
        <form
          onSubmit={formSubmissionHandler}
          autoComplete="off"
          className="formFields"
        >
          {/* First Name */}
          <div className={firstNameInputClasses}>
            <label className="formFieldLabel" htmlFor="name">
              <p>Firstname</p>
            </label>
            <input
              type="text"
              id="fname"
              className="formFieldInput"
              placeholder="e.g John"
              name="name"
              onChange={firstNameChangedHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
            />
            {firstNameInputHasError && (
              <p className="error-text">FirstName must not be empty.</p>
            )}
          </div>
          {/* Last Name */}
          <div className={lastNameInputClasses}>
            <label className="formFieldLabel" htmlFor="name">
              <p>Lastname</p>
            </label>
            <input
              type="text"
              id="lname"
              className="formFieldInput"
              placeholder="e.g Smith"
              name="name"
              onChange={lastNameChangedHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
            />
            {lastNameInputHasError && (
              <p className="error-text">LastName must not be empty.</p>
            )}
          </div>
          {/* Email Address */}
          <div className={emailInputClasses}>
            <label className="formFieldLabel" htmlFor="email">
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
            />
            {emailInputHasError && (
              <p className="error-text">Please enter a valid email.</p>
            )}
          </div>
          {/* Password */}
          <div className={passwordInputClasses}>
            <label className="formFieldLabel" htmlFor="password">
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
            />
            {passwordInputHasError && (
              <p className="error-text">
                Password should 8 characters or more.
              </p>
            )}
          </div>
          {/* Password confirmation */}
          <div className={confirmPasswordInputClasses}>
            <label className="formFieldLabel" htmlFor="cpassword">
              <p>Confirm Password</p>
            </label>
            <input
              type="password"
              id="cpassword"
              className="formFieldInput"
              placeholder="Confirm password"
              name="cpassword"
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              value={enteredConfirmPassword}
            />
            {confirmPasswordInputHasError && (
              <p className="error-text">Passwords do not match</p>
            )}
          </div>
          {/* Mobile Number */}
          <div className={mobileNumberInputClasses}>
            <label className="formFieldLabel" htmlFor="mobileNumber">
              <p>
                Phone Number <span style={{ opacity: 0.7 }}>(Optional)</span>
              </p>
            </label>
            <input
              type="text"
              inputMode="numeric"
              id="mobileNumber"
              className="formFieldInput"
              placeholder="Enter your Phone Number"
              name="mobileNumber"
              onChange={mobileNumberChangeHandler}
              onBlur={mobileNumberBlurHandler}
              value={enteredMobileNumber}
            />
            {mobileNumberInputHasError && (
              <p className="error-text">Enter a valid mobile number</p>
            )}
          </div>

          {/* College Name */}
          <div className={collegeInputClasses}>
            <label className="formFieldLabel" htmlFor="college">
              <p>College</p>
            </label>
            <input
              type="text"
              id="college"
              className="formFieldInput"
              placeholder="Enter College Name"
              name="college"
              onChange={collegeChangeHandler}
              onBlur={collegeBlurHandler}
              value={enteredCollege}
            />
            {collegeInputHasError && (
              <p className="error-text">Enter a valid college name</p>
            )}
          </div>

          {/* Degree Field  */}
          <div className={degreeInputClasses}>
            <label className="formFieldLabel" htmlFor="degree">
              <p>Choose type of degree</p>
            </label>
            <input
              list="degrees"
              className="formFieldInput"
              name="degree"
              placeholder="Choose your degree"
              id="degree"
              value={enteredDegree}
              onChange={degreeChangeHandler}
              onBlur={degreeBlurHandler}
            />
            <datalist id="degrees">
              <option value="B.Tech" />
              <option value="B.E" />
              <option value="BBA" />
              <option value="Bsc" />
              <option value="B.A" />
              <option value="B.Com" />
              <option value="MBBS" />
              <option value="L.L.B" />
              <option value="M.Tech" />
              <option value="M.E" />
              <option value="M.Law" />
              <option value="M.A" />
              <option value="M.Com" />
              <option value="M.D" />
              <option value="MBA" />
              <option value="MCA" />
              <option value="BCA" />

              <option value="Other" />
            </datalist>
            {degreeInputHasError && (
              <p className="error-text">Select one of the degree</p>
            )}
          </div>
          {/* Study Branch */}
          <div className={branchInputClasses}>
            <label className="formFieldLabel" htmlFor="branch">
              <p>Choose Branch of Study </p>
            </label>
            <input
              list="branches"
              className="formFieldInput"
              name="branch"
              placeholder="Choose your branch"
              id="branch"
              value={enteredBranch}
              onChange={branchChangeHandler}
              onBlur={branchBlurHandler}
            />
            <datalist id="branches">
              <option value="Computer Engineering" />
              <option value="Electronics and Communication Engineering" />
              <option value="Electrical Engineering" />
              <option value="Mechanical engineering" />
              <option value="Information Technology" />
              <option value="Agriculture Engineering" />
              <option value="Information and Communication Technology Engineering" />
              <option value="Automobile Engineering" />
              <option value="Science and Humanities" />
              <option value="Civil Engineering" />
              <option value="Accounting and Finance" />
              <option value="Sales Marketing" />
              <option value="Food science" />
              <option value="Arts and design" />
              <option value="Other" />
            </datalist>
            {degreeInputHasError && (
              <p className="error-text">Select one of the branch </p>
            )}
          </div>
          {/* Passing Year */}
          <div className={passingYearInputClasses}>
            <label className="formFieldLabel" htmlFor="passingYear">
              <p>Passing Year</p>
            </label>
            <input
              type="text"
              inputMode="numeric"
              id="passingYear"
              className="formFieldInput"
              placeholder="Your Passing Year"
              name="passingYear"
              onChange={passingYearChangeHandler}
              onBlur={passingYearBlurHandler}
              value={enteredPassingYear}
            />
            {passingYearInputHasError && (
              <p className="error-text">Passing year invalid</p>
            )}
          </div>
          {/* Document url  */}
          <div className={documentUrlInputClasses}>
            <label className="formFieldLabel" htmlFor="document">
              <p>Document Url</p>
            </label>
            <input
              type="file"
              id="documentUrl"
              className="formFieldInput"
              name="docImg"
              onChange={(e) => setDocImg(e.target.files[0])}
            />
            <button className="addProductButton" onClick={handleUpload}>
              Upload
            </button>
            {documentUrlInputHasError && (
              <p className="error-text">Enter Valid document url </p>
            )}
          </div>
          {/* Checkbox */}
          <div className="form-control">
            <div className="checkbox-field">
              <input type="checkbox" name="hasAgreed" />
              <label className="formFieldCheckboxLabel" htmlFor="hasAgreed">
                I agree all statements in terms of service
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="form-actions">
            {/* {(!isLoading || uploaded === 1) && (
              
            )}{" "} */}
            {!isLoading && (
              <button
                type="submit"
                disabled={!formIsValid}
                onClick={redirectHandler}
                className="formFieldButton"
              >
                Create Account
              </button>
            )}
            {isLoading && (
              <button
                type="submit"
                disabled={!formIsValid}
                className="formFieldButton"
              >
                Loading...
              </button>
            )}
            <Link to="/login" className="formFieldLink">
              Already have an account? Login here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
