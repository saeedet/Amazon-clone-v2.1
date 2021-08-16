import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__signInWrapper">
        <div className="login__container">
          <h1 className="login__header">Sign-In</h1>
          <form>
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="login__signInButton"
              onClick={signIn}
              type="submit"
            >
              <span className="innerButton">Sign-In</span>
            </button>
          </form>

          <p>
            By continuing, you agree to Amazon's{" "}
            <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.
          </p>
        </div>
        <div className="login__devider">
          <div className="login__deviderLine"></div>
          <h5>New to Amazon?</h5>
        </div>
        <button
          className="login__registerButton"
          onClick={() => {
            history.push("/register");
          }}
        >
          <span className="innerButton">Create your Amazon account</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
