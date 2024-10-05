import React, { useState } from "react";
import "./LoginTest.css";
import pic1 from "../Images/login.jpg";
import logo from "../Images/logo.svg";
import google from "../Images/google.png";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function LoginTest({ loginStatus }) {
  let init = {
    email: "",
    name: "",
    password: "",
    phone: "",
    confirmPassword: "",
    role: "student",
  };
  const user = { email: "nitin@gmail.com", password: "singh" };
  const [formData, setFormData] = useState(init);
  const [loggedIn, SetLoggedIn] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  // function submit(event) {
  //   event.preventDefault();
  //   const name = formData.email.toLowerCase();
  //   const password = formData.password.toLowerCase();

  //   if (user.email === name && user.password === password) {
  //     loginStatus(true);
  //     //   alert("Welcome Back Buddy");
  //   } else {
  //     alert("Are you really an admin");
  //   }
  //   console.log(formData);
  // }

  const submit = (e) => {
    
    e.preventDefault();
    if (validateInputForLogin()) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        
        // Signed in

        const user = userCredential.user;
        loginStatus("login");
        console.log(user);
        // navigate("/"); // Redirect to home after login
      })
      .catch((error) => {
        alert("Invalid credentials");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
    }
   
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        alert("Logged In Successfully");
        loginStatus("login");
        const user = result.user;
        console.log("User signed in: ", user);
      })
      .catch((error) => {
        console.error("Error during sign-in: ", error.message);
      });
  };

  function logoutFunc() {
    navigate("/");
    loginStatus("login");
  }
  function registerUser() {
    if (validateInput()) {
      // Proceed with form submission
      addDoc(collection(db, "users"), {
        formData,
        completed: false,
      })
        .then((d) => {
          // setButtonClicked(false);
          alert(
            "Your post will add after verification, Thanks for your contribution"
          );
        })
        .catch((e) => {
          console.log(e);
        });
      setError({});
    }

    // onClose();

    // setFormData(init);
  }

  const validateInput = () => {
    
    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required.";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required.";
    }
    if (!formData.password) {
      errors.password = "Password is required.";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setError(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };
  const validateInputForLogin = () => {
    
    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required.";
    }
  
    if (!formData.password) {
      errors.password = "Password is required.";
    }
   
    setError(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };
  return (
    <div>
      <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
          <div class="card login-card">
            <div class="row no-gutters">
              <div class="col-md-5">
                <img src={pic1} alt="login" class="login-card-img" />
              </div>
              {loginPage ? (
                <div class="col-md-7">
                  <div class="card-body">
                    <div class="brand-wrapper">
                      <img src={logo} alt="logo" class="logo" />
                    </div>
                    <p class="login-card-description">Sign into your account</p>
                    <form action="#!">
                      <div class="form-group">
                        <label for="email" class="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={changeHandler}
                        />
                         {error.password && (
                          <span className="form-error">{error.email}</span>
                        )}
                      </div>
                      <div class="form-group mb-4">
                        <label for="password" class="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          class="form-control"
                          placeholder="Password"
                          value={formData.password}
                          onChange={changeHandler}
                        />
                         {error.password && (
                          <span className="form-error">{error.password}</span>
                        )}
                      </div>
                      <input
                        name="login"
                        id="login"
                        class="btn btn-block login-btn mb-4"
                        type="button"
                        value="Login"
                        onClick={submit}
                      />
                    </form>
                    <a href="#!" class="forgot-password-link">
                      Forgot password?
                    </a>
                    <p class="login-card-footer-text">
                      Don't have an account?{" "}
                      <a
                        href="#!"
                        class="text-reset"
                        onClick={() => setLoginPage(false)}
                      >
                        Register here
                      </a>
                    </p>
                    <div className="login-with-thirdParty">
                      <div className="login-with-thirdParty-google">
                        <img
                          src={google}
                          alt="Google logo"
                          onClick={signInWithGoogle}
                        />
                      </div>
                    </div>
                    <nav class="login-card-footer-nav">
                      <a href="#!">Terms of use.</a>
                      <a href="#!">Privacy policy</a>
                    </nav>
                  </div>
                </div>
              ) : (
                <div class="col-md-7">
                  <div class="card-body">
                    <div class="brand-wrapper">
                      <img src={logo} alt="logo" class="logo" />
                    </div>
                    <p class="login-card-description">Register account</p>
                    <form action="#!">
                      <div class="form-group">
                        <label for="email" class="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={changeHandler}
                        />
                         {error.email && (
                          <span className="form-error">{error.email}</span>
                        )}
                      </div>
                      <div class="form-group">
                        <label for="phone" class="sr-only">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          class="form-control"
                          placeholder="Phone number"
                          value={formData.phone}
                          onChange={changeHandler}
                        />
                         {error.phone && (
                          <span className="form-error">{error.phone}</span>
                        )}
                      </div>

                      <div class="form-group">
                        <label for="password" class="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          class="form-control"
                          placeholder="Password"
                          value={formData.password}
                          onChange={changeHandler}
                        />
                        {error.password && (
                          <span className="form-error">{error.password}</span>
                        )}
                      </div>
                      <div class="form-group">
                        <label for="email" class="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          class="form-control"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={changeHandler}
                        />
                        {error.confirmPassword && (
                          <span className="form-error">{error.confirmPassword}</span>
                        )}
                      </div>
                      <input
                        name="login"
                        id="login"
                        class="btn btn-block login-btn mb-4"
                        type="button"
                        value="Register"
                        onClick={registerUser}
                      />
                    </form>
                    <p
                      className="haveAcount"
                      onClick={() => setLoginPage(true)}
                    >
                      Already have an account
                    </p>
                    <nav class="login-card-footer-nav">
                      <a href="#!">Terms of use.</a>
                      <a href="#!">Privacy policy</a>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div class="card login-card">
        <img src="assets/images/login.jpg" alt="login" class="login-card-img"/>
        <div class="card-body">
          <h2 class="login-card-title">Login</h2>
          <p class="login-card-description">Sign in to your account to continue.</p>
          <form action="#!">
            <div class="form-group">
              <label for="email" class="sr-only">Email</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Email"/>
            </div>
            <div class="form-group">
              <label for="password" class="sr-only">Password</label>
              <input type="password" name="password" id="password" class="form-control" placeholder="Password"/>
            </div>
            <div class="form-prompt-wrapper">
              <div class="custom-control custom-checkbox login-card-check-box">
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Remember me</label>
              </div>              
              <a href="#!" class="text-reset">Forgot password?</a>
            </div>
            <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login"/>
          </form>
          <p class="login-card-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
        </div>
      </div>  */}
        </div>
      </main>
    </div>
  );
}

export default LoginTest;
