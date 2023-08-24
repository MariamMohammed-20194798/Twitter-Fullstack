import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import CloseMoreNav from "./../CloseMoreNav/CloseMoreNav";
import Container from "./../Container/Container";
import defaultImg from "./../../imgs/default.jpeg";
import { TiFolder } from "react-icons/ti";
import { GiElectric } from "react-icons/gi";
import { FaBattleNet } from "react-icons/fa";
import { IoIosPulse } from "react-icons/io";
import {
  FiEdit,
  FiExternalLink,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { Form, Div, DivImg, Img, P, Border, A } from "./NavMoreStyled";
export const NavMore = (props) => {
  return (
    <Form>
      <CloseMoreNav bgColor={`transparent`} clicked={props.showModal} />
      <Container>
        <Div onClick={props.showModal}>
          <DivImg>
            <Img src={defaultImg} alt="UserImg" />
            <P primary>Mariam</P>
            <P>@Maro_Muhammed</P>
          </DivImg>
          <Border />
          <div>
            <A>
              <TiFolder />
              <P primary topics>
                Topics
              </P>
            </A>
            <A>
              <GiElectric />
              <P primary topics>
                Momments
              </P>
            </A>
            <A>
              <FaBattleNet />
              <P primary topics>
                Promote Mode
              </P>
            </A>
            <A>
              <FiExternalLink />
              <P primary topics>
                Twitter Ads
              </P>
            </A>
            <A>
              <IoIosPulse />
              <P primary topics>
                Analytics
              </P>
            </A>
            <Border />
            <A>
              <FiSettings />
              <P primary topics>
                Settings and privacy
              </P>
            </A>
            <A>
              <FiHelpCircle />
              <P primary topics>
                Help Center
              </P>
            </A>
            <NavLink to="/Display" style={{ textDecoration: "none" }}>
              <A>
                <FiEdit />
                <P primary topics>
                  Display
                </P>
              </A>
            </NavLink>

            <Border />
            <A>
              <P primary topics>
                Log out
              </P>
            </A>
          </div>
        </Div>
      </Container>
      {/*   {isClicked ? <DisplayBlock clicked={isClicked} /> : null} */}
    </Form>
  );
};
