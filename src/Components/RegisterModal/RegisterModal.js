import React, { useEffect, useState } from "react";
import "./RegisterModal.css"; // Import your CSS for styling
import pic1 from "../../Images/login.jpg";
import logo from "../../Images/logo.svg";
import google from "../../Images/google.png";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Spinner from "../CommonComponents/Spinner/Spinner";
import Popup from "../CommonComponents/Popup/Popup";

const RegisterModal = ({ isOpen, close, title, loginStatus }) => {
  //   if (!isOpen) return null; // Don't render anything if the modal is not open

  let init = {
    email: "",
    name: "",
    password: "",
    phone: "",
    confirmPassword: "",
    role: "student",
  };
  let errorInit = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const user = { email: "nitin@gmail.com", password: "singh" };
  const [formData, setFormData] = useState(init);
  const [loggedIn, SetLoggedIn] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [error, setError] = useState(errorInit);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for saved credentials
    const savedEmail = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail) {
      setFormData({
        ...formData,
        email: savedEmail,
        password: savedPassword,
      });
      setRememberMe(true); // Automatically check "Remember Me"
    }

    // Note: For security reasons, avoid saving passwords in local storage
  }, []);

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

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

  const submit = async (e) => {
    setShowSpinner(true);
    if (rememberMe) {
      localStorage.setItem("username", formData.email);
      localStorage.setItem("password", formData.password);
    } else {
      sessionStorage.setItem("username", formData.email);
      sessionStorage.setItem("password", formData.password);
    }
    e.preventDefault();
    if (validateInputForLogin()) {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          const dataFromDb = await getDocumentById(formData.email);
          debugger;
          if (dataFromDb.date !== formatter.format(new Date())) {
            handleUpdateAndFetch(formData.email, dataFromDb.daysPracticed);
          } else {
            loginStatus(dataFromDb);
          }
          setIsLoggedIn(true);
          setShowSpinner(false);
          // console.log(user);
          // navigate("/"); // Redirect to home after login
        })
        .catch((error) => {
          alert("Invalid credentials");
          setShowSpinner(false);
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
    loginStatus(false);
  }
  async function registerUser() {
    setShowSpinner(true);
    setShowPopup(false)
    if (validateInput()) {
      // Proceed with form submission

      const email = formData.email; // Assuming formData contains an email field

      try {
        // Create a reference to the document using the user's email as the ID
        const docRef = doc(db, "users", email);
        const { confirmPassword, ...dataWithoutConfirmPassword } = formData;
        dataWithoutConfirmPassword.reading = 0;
        dataWithoutConfirmPassword.writing = 0;
        dataWithoutConfirmPassword.listening = 0;
        dataWithoutConfirmPassword.speaking = 0;
        dataWithoutConfirmPassword.overAll = 0;
        dataWithoutConfirmPassword.daysPracticed = 0;
        dataWithoutConfirmPassword.paymentVerified = false;
        dataWithoutConfirmPassword.daysCount = 0;
        const formatter = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        dataWithoutConfirmPassword.date = formatter.format(new Date());

        // Set the data for the document
        await setDoc(docRef, {
          dataWithoutConfirmPassword,
          completed: false,
        })
          .then(async (d) => {
            console.log(d);
            // alert("registered successfully");

            await createUserWithEmailAndPassword(
              auth,
              formData.email,
              formData.password
            )
              .then((userCredential) => {
                // User is signed in
                setShowSpinner(false);
                setFormData(init);
                setShowPopup(true);
                const user = userCredential.user;
                console.log("User created:", user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user:", errorMessage);
              });
          })
          .catch((e) => {
            console.log(e);
          });

        console.log("Document written with ID: ", email);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setError({});
    }
    // setShowPopup(false)
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

  function registerFormfunc(param) {
    setLoginPage(param);
    setError(errorInit);
  }

  async function getDocumentById(email) {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const dataFromDb = docSnap.data();
      return dataFromDb.dataWithoutConfirmPassword;
      // console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  const handleUpdateAndFetch = async (email, daysPracticed) => {
    debugger;
    const docRef = doc(db, "users", email); // Reference to the document

    try {
      // Update the document

      await updateDoc(docRef, {
        "dataWithoutConfirmPassword.daysPracticed": daysPracticed + 1,
        "dataWithoutConfirmPassword.date": formatter.format(new Date()),
      });

      // Fetch the updated document
      const updatedDoc = await getDoc(docRef);
      if (updatedDoc.exists()) {
        let data = updatedDoc.data(); // Store updated data in state
        loginStatus(data.dataWithoutConfirmPassword)
        console.log("Updated Document Data:", data);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error updating or fetching document: ", error);
    }
  };

  if (!isOpen) return; // keep it at the end
  return (
    <div className="registerModal-main" onClick={close}>
      {showPopup == true ? (
        <Popup
          message={"Registered successfully"}
          duration={3000}
          popType={"Success"}
        />
      ) : (
        <></>
      )}
      <div
        className="registerModal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {loginPage ? (
            <div className="registerModal-content-body">
              <div className="registerModal-content-body-top">
                <img
                  src={logo}
                  alt="logo"
                  className="registerModal-content-body-top-logo"
                />
              </div>
              <p className="registerModal-content-body-top-desc">
                Sign into your account
              </p>
              <form action="#!" className="registerModal-content-body-form">
                <div className="registerModal-content-body-form-group">
                  <div className="registerModal-content-body-form-inputAndlabel">
                    <label
                      for="email"
                      className="registerModal-content-body-form-label"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="registerModal-content-body-form-input"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={changeHandler}
                    />
                  </div>
                  {error.password && (
                    <span className="registerModal-content-body-form-error">
                      {error.email}
                    </span>
                  )}
                </div>
                <div className="registerModal-content-body-form-group">
                  <div className="registerModal-content-body-form-inputAndlabel">
                    <label
                      for="password"
                      className="registerModal-content-body-form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="registerModal-content-body-form-input"
                      placeholder="Password"
                      value={formData.password}
                      onChange={changeHandler}
                    />
                  </div>
                  {error.password && (
                    <span className="registerModal-content-body-form-error">
                      {error.password}
                    </span>
                  )}
                </div>
                <div className="registerModal-content-body-form-group">
                  <div className="registerModal-content-body-form--remeberMe">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      name="remember"
                      id="remember"
                      className="registerModal-content-body-form-input"
                    />
                    <label
                      for="remember"
                      className="registerModal-content-body-form-remeberlabel"
                    >
                      Remember Me
                    </label>
                  </div>
                  {error.password && (
                    <span className="registerModal-content-body-form-error">
                      {error.password}
                    </span>
                  )}
                </div>
                <input
                  name="login"
                  id="login"
                  className="registerModal-content-body-form-button"
                  type="button"
                  value="Login"
                  onClick={submit}
                />
              </form>
              <a
                href="#!"
                className="registerModal-content-body-forgot-password-link"
              >
                Forgot password?
              </a>
              <p className="registerModal-content-body-login-card-footer-text">
                Don't have an account?{" "}
                <a
                  href="#!"
                  className="registerModal-content-body-form-registerHere-link"
                  onClick={() => registerFormfunc(false)}
                >
                  Register here
                </a>
              </p>
              {/* <div className="login-with-thirdParty">
                <div className="login-with-thirdParty-google">
                  <img
                    src={google}
                    alt="Google logo"
                    onClick={signInWithGoogle}
                  />
                </div>
              </div> */}
              <nav class="registerModal-content-body-login-card-footer-nav">
                <a href="#!">Terms of use.</a>
                <a href="#!">Privacy policy</a>
              </nav>
            </div>
          ) : (
            <div class="registerModal-content-body">
              <div class="registerModal-content-body-top">
                <img
                  src={logo}
                  alt="logo"
                  className="registerModal-content-body-top-logo"
                />
              </div>
              <p class="registerModal-content-body-top-desc">
                Register account
              </p>
              <form action="#!" className="registerModal-content-body-form">
                <div class="registerModal-content-body-form-group">
                  <div className="registerModal-content-body-form-inputAndlabel">
                    <label
                      for="email"
                      className="registerModal-content-body-form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="registerModal-content-body-form-input"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={changeHandler}
                    />
                  </div>
                  {error.email && (
                    <span className="registerModal-content-body-form-error">
                      {error.email}
                    </span>
                  )}
                </div>
                <div class="registerModal-content-body-form-group">
                  <div className="registerModal-content-body-form-inputAndlabel">
                    <label
                      for="phone"
                      className="registerModal-content-body-form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className="registerModal-content-body-form-input"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={changeHandler}
                    />
                  </div>
                  {error.phone && (
                    <span className="registerModal-content-body-form-error">
                      {error.phone}
                    </span>
                  )}
                </div>

                <div class="registerModal-content-body-form-group">
                  <div className="registerModal-content-body-form-inputAndlabel">
                    <label
                      for="password"
                      className="registerModal-content-body-form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="registerModal-content-body-form-input"
                      placeholder="Password"
                      value={formData.password}
                      onChange={changeHandler}
                    />
                  </div>
                  {error.password && (
                    <span className="registerModal-content-body-form-error">
                      {error.password}
                    </span>
                  )}
                </div>
                <div class="registerModal-content-body-form-group">
                  <div className="registerModal-content-body-form-inputAndlabel">
                    <label
                      for="email"
                      className="registerModal-content-body-form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="registerModal-content-body-form-input"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={changeHandler}
                    />
                  </div>
                  {error.confirmPassword && (
                    <span className="registerModal-content-body-form-error">
                      {error.confirmPassword}
                    </span>
                  )}
                </div>
                <input
                  name="register"
                  id="registere"
                  className="registerModal-content-body-form-button"
                  type="button"
                  value="Register"
                  onClick={registerUser}
                />
              </form>
              <p
                className="registerModal-content-body-haveAcount"
                onClick={() => registerFormfunc(true)}
              >
                Already have an account
              </p>
              <nav class="registerModal-content-body-login-card-footer-nav">
                <a href="#!">Terms of use.</a>
                <a href="#!">Privacy policy</a>
              </nav>
            </div>
          )}
        </div>
      </div>
      {showSpinner ? <Spinner /> : <></>}
    </div>
  );
};

export default RegisterModal;
