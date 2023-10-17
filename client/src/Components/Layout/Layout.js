import React from "react";
import { Main, DivIn } from "./LayoutStyled";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import { RightSide } from "../RightSide/RightSide";

const Layout = (props) => {
  return (
    <div>
      <Container>
        <NavBar />
        <Main>
          <DivIn>{props.children}</DivIn>
          <RightSide />
        </Main>
      </Container>
    </div>
  );
};

export default Layout;
