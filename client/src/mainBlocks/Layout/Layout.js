import React from "react";
import { Main, Div, DivIn } from "./LayoutStyled";
import NavBar from "./../../Components/NavBar/NavBar";
import MainContainer from "../../mainBlocks/MainContainer/MainContainer";
import { RightSide } from "../../Components/RightSide/RightSide";

const Layout = (props) => {
  return (
    <MainContainer>
      <div>
        <NavBar />
        <Main>
          <DivIn>{props.children}</DivIn>
          <RightSide />
        </Main>
      </div>
    </MainContainer>
  );
};

export default Layout;
