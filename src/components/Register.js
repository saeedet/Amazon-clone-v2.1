import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        auth.user.updateProfile({
          displayName: name,
        });
      })
      .then(() => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__header">Create account</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={register}
            type="submit"
          >
            <span className="innerButton">Create your Amazon account</span>
          </button>
        </form>
        <p>
          By creating an account, you agree that you have read and accepted our{" "}
          <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.
        </p>

        <div className="register__footer"></div>
        <div className="register__footerLink">
          Already have an account?{" "}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              history.push("/login");
            }}
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
