import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Signup.module.css";
import Input from "./../../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const fetchData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name,
      email,
      username,
      password,
      confirmPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:8000/api/v1/users/signup`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          navigate("/Home");
        }
      });
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.iconsBox}>
            <AiOutlineClose
              onClick={props.onCloseSignup}
              className={classes.icon1}
            ></AiOutlineClose>
          </div>
          <div className={classes.title}>
            <strong>Create your account</strong>
          </div>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className={classes.nextBtn} type="submit">
            Sign Up
          </button>
          <h3>
            You have already an account ?{" "}
            <Link to="/Signin" className={classes.link} onClick={fetchData}>
              SignIn
            </Link>
          </h3>
        </form>
      </div>
    </>
  );
}

export default Signup;
