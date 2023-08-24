import React, { useState } from "react";
import instance from "../../../axios";
import classes from "./Signin.module.css";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Input from "./../../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
function Signin(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await instance.post("users/login", {
      email,
      password,
    });
    if (res.data.status === "success") {
      navigate("/Home");
    }
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.iconsBox}>
            <AiOutlineClose
              onClick={props.onCloseSignin}
              className={classes.icon1}
            ></AiOutlineClose>
            <FaTwitter className={classes.icon2} />
          </div>
          <div className={classes.title}>
            <strong>Sign in to Twitter</strong>
          </div>
          <Input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.btnBox}>
            <button className={classes.loginBtn} type="submit">
              Log in
            </button>
          </div>
          <h3>
            Don't have an account ?{" "}
            <Link to="/Signup" className={classes.link}>
              Sign Up
            </Link>
          </h3>
        </form>
      </div>
    </>
  );
}

export default Signin;
