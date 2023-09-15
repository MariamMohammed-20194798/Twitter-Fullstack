import React, { useState } from "react";
import instance from "../../axios";
import classes from "./Signin.module.css";
import { FaTwitter } from "react-icons/fa";
import Input from "../../Components/Input/Input";
import { useUsernameStore } from "../../styledComponents/useUsernameStore";
import { useNavigate } from "react-router-dom";
function Signin(props) {
  const setUsername = useUsernameStore((state) => state.setUsername);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setErrorMsg("");
      if (!email || !password) setErrorMsg("Email and Password Are Required.");

      const res = await instance.post("users/login", {
        email,
        password,
      });
      if (res.data.status === "success") {
        const { user } = await res.data.data.user;
        setUsername(user);
        navigate("/Home");
      }
    } catch (err) {
      setErrorMsg(err.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.div}>
          <FaTwitter size={50} className={classes.icon2} />
        </div>
        <div className={classes.title}>
          <strong>Sign in to Twitter</strong>
        </div>{" "}
        <div className={classes.div}>
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
        </div>
        {errorMsg && <p className={classes.p}>{errorMsg}</p>}
        <div className={classes.btnBox}>
          <button
            className={classes.loginBtn}
            type="submit"
            onClick={props.OnSignin}
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

export default Signin;
