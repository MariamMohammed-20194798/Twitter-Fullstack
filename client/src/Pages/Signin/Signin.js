import React, { useState } from "react";
import instance from "../../axios";
import Input from "../../Components/Input/Input";
import { useUsernameStore } from "../../styledComponents/useUsernameStore";
import { useNavigate } from "react-router-dom";
import { Div, Title, BtnBox, BtnLogin, FaTwitterIcon, P } from "./SigninStyled";
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
        <Div>
          <FaTwitterIcon size={50} />
        </Div>
        <Title>
          <strong>Sign in to Twitter</strong>
        </Title>{" "}
        <Div>
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
        </Div>
        {errorMsg && <P>{errorMsg}</P>}
        <BtnBox>
          <BtnLogin type="submit" onClick={props.OnSignin}>
            Log in
          </BtnLogin>
        </BtnBox>
      </form>
    </>
  );
}

export default Signin;
