import { set } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login({ loginStatus }) {
  
  let init = { username: "", password: "" };
  const user = { name: "nitin", password: "singh" };
  const [formData, setFormData] = useState(init);
  const [loggedIn, SetLoggedIn] = useState(false);
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function submit(event) {
    event.preventDefault();
    const name = formData.username.toLowerCase();
    const password = formData.password.toLowerCase();

    if (user.name === name && user.password === password) {
      loginStatus("login");
      alert("Welcome Back Buddy");
    } else {
      alert("Are you really an admin");
    }
    console.log(formData);
  }
  function logoutFunc() {
    navigate("/");
    loginStatus("logout");
  }
  return (
    <>
      <div className="contact">
        <div className="contactMain">
          <div className="contact-heading">
            <h2>Login</h2>
          </div>
          <div className="formDiv">
            <form className="formMain">
              <div className="contactFormFields">
                <label className="formLabel">UserName</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={changeHandler}
                />
              </div>
              <div className="contactFormFields">
                <label className="formLabel">Password</label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                />
              </div>
              <div className="submitDiv">
                <button
                  type="submit"
                  className="contact-submit-button"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
