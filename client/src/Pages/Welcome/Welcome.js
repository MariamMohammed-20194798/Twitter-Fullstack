import React, { useState } from "react";
import tw1 from "./../../imgs/tw1.jpg";
import { FaTwitter } from "react-icons/fa";
import Signin from "./../Auth/Signin/Signin";
import Signup from "./../Auth/Signup/Signup";
import Links from "./../../Components/Links/Links";
import {
  Main,
  Container,
  Img,
  Text,
  Fatwitter1,
  Fatwitter2,
  ContentContainer,
  Strong,
  CreateBtn,
  SigninBtn,
} from "./WelcomeStyled";

function Welcome() {
  const [ShowSigninBox, seShowSgininBox] = useState(false);
  const [ShowSignupBox, seShowSginupBox] = useState(false);
  const toggleSigninBox = () => {
    seShowSgininBox(!ShowSigninBox);
  };
  const closeSigninBox = () => {
    seShowSgininBox(false);
  };
  const toggleSignupBox = () => {
    seShowSginupBox(!ShowSignupBox);
  };
  const closeSignupBox = () => {
    seShowSginupBox(false);
  };

  return (
    <Main>
      <Container>
        <Img src={tw1} alt="img1" />
        <Fatwitter1>
          <FaTwitter />
        </Fatwitter1>
        <ContentContainer>
          <Fatwitter2>
            <FaTwitter />
          </Fatwitter2>
          <Strong primary>Happening now</Strong>
          <Strong>Join Twitter today.</Strong>
          <CreateBtn onClick={toggleSignupBox}>Create account</CreateBtn>
          {ShowSignupBox && <Signup onCloseSignup={closeSignupBox} />}
          <Text>Already have an account?</Text>
          <SigninBtn onClick={toggleSigninBox}>Sign in</SigninBtn>
          {ShowSigninBox && <Signin onCloseSignin={closeSigninBox} />}
        </ContentContainer>
      </Container>
      <Links />
    </Main>
  );
}
export default Welcome;
