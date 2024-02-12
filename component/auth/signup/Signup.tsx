import React from "react";
import "./Signup.css";

const SignupUser = () => {
  return (
    <div className="container">
      <div className="heading">Sign up</div>

      <form action="" className="form">
        <input
          required
          className="input"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
        <input
          required
          className="input"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          required
          className="input"
          type="tell"
          name="tell"
          id="tell"
          placeholder="Phone number (+234)"
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          required
          className="input"
          type="confirmpassword"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="confirm Password"
        />
        <button className="login-button" type="submit" value="Sign up">
          Sign up
        </button>
      </form>
      <div className="social-account-container">
        <span className="title">Or Sign up with</span>
        <div className="social-accounts">
          <button className="social-button google">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 488 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
          </button>
        </div>
      </div>
      <span className="agreement">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>
  );
};

export default SignupUser;
