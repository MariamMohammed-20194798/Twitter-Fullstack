import React from "react";
import styled from "styled-components";

const CloseMoreNav = (props) => {
  const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;
  return (
    <Div
      style={{ backgroundColor: `${props.bgColor}` }}
      onClick={props.clicked}
    />
  );
};

export default CloseMoreNav;
