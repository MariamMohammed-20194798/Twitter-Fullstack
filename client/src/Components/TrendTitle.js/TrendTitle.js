import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Div,
  P,
  DivTrend,
  DivHeader,
  DivText,
  Border,
} from "./TrendTitleStyled";
export const TrendsTitle = (props) => {
  return (
    <React.Fragment>
      <Div>
        <DivTrend>
          <DivHeader>
            <P Secondry>{props.header}</P>
            <Div Header>
              <IoIosArrowDown />
            </Div>
          </DivHeader>
          <DivText>
            <P>{props.text}</P>
          </DivText>
          <div>
            <P Secondry>{props.numbers}</P>
          </div>
        </DivTrend>
        <Border />
      </Div>
    </React.Fragment>
  );
};
