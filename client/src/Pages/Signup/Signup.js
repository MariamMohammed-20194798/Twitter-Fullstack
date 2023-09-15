import React, { useState } from "react";
import classes from "./Signup.module.css";
import Input from "../../Components/Input/Input";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!name || !email || !username || !password || !confirmPassword)
        setErrorMsg("Please Fill All Fields.");

      if (name && email && username && password && confirmPassword) {
        const res = await instance.post("users/signup", {
          name,
          email,
          username,
          password,
          confirmPassword,
        });
        if (res.data.status === "success") {
          console.log(res);
          navigate("/Home");
        }
      }
    } catch (err) {
      console.log(err.response.data);
      if (
        err.response.data.message.includes(
          "E11000 duplicate key error collection"
        )
      ) {
        setErrorMsg(`User with this email already exists.`);
      } else if (err.response.data.message.includes("User validation failed")) {
        setErrorMsg(`Passwords are not the same!`);
      }
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
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
        {errorMsg && <p className={classes.p}>{errorMsg}</p>}
        <button className={classes.nextBtn} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default Signup;
