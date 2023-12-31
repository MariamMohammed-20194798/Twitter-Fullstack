import { React, useState, useEffect } from "react";
import instance from "../../axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NavMore } from "../../Components/NavMore/NavMore";
import { FaTwitter, FaRegBookmark } from "react-icons/fa";
import { FiMail, FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline, IoIosList, IoIosAdd } from "react-icons/io";
import { BiHomeCircle } from "react-icons/bi";
import { Div, Ul, Navlink, P, Img, Button } from "./NavBarStyled";

const NavBar = () => {
  const Li = styled.li`
color: ${(props) =>
    props.selected
      ? props.theme.buttonTheme.color
      : props.theme.theme.primaryTextColor};
  list-style: none;
  border-radius: 3rem;
  margin-bottom: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 3.5rem;
  font-weight: 900;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  img {
    border: ${(props) =>
      props.selected ? `2px solid ${props.theme.buttonTheme.color}` : ""};
  }

  &:hover {
    color: ${(props) => props.theme.buttonTheme.color};
   
  }

  &:last-of-type {
    background: none;
    text-decoration: none;
    list-style: none;
    user-select: none;
    margin-left: -0.5rem;
  }
  &:first-of-type {
    background: none;
    color: ${({ theme }) => theme.theme.primaryTextColor};
    padding: 0.8rem;
    margin-left: 1rem;
  }
  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
  }
`;
  const Btn = styled.button`
    color: ${(props) =>
      props.selected
        ? props.theme.buttonTheme.color
        : props.theme.theme.primaryTextColor};
    font-size: 3rem;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-weight: 900;
    cursor: pointer;
    @media (max-width: 1024px) {
      margin-bottom: 5rem;
      margin-left: 0.5rem;
      margin-top: -2rem;
    }
    &:hover {
      color: ${(props) => props.theme.buttonTheme.color};
    }
  `;
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`users/me`);
        setData(res.data.data.data);
      } catch (err) {
        console.log("error", err.response.data.message);
      }
    })();
  }, []);

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen((prev) => !prev);
  };

  const { pathname } = useLocation();

  return (
    <Div>
      {!open ? (
        <Ul>
          <Li>
            <Navlink to="/Home">
              <FaTwitter />
            </Navlink>
          </Li>
          <Li selected={pathname === "/Home" ? true : false}>
            <Navlink to="/Home">
              <BiHomeCircle />
              <P>Home</P>
            </Navlink>
          </Li>
          <Li>
            <Navlink to="/Home">
              <FiSearch />
              <P>Explore</P>
            </Navlink>
          </Li>
          <Li selected={pathname === "/Notification" ? true : false}>
            <Navlink to="/Notification">
              <IoMdNotificationsOutline />
              <P>Notifications</P>
            </Navlink>
          </Li>
          <Li>
            <Navlink to="/Home">
              <FiMail />
              <P>Messages</P>
            </Navlink>
          </Li>
          <Li>
            <Navlink to="/Home">
              <FaRegBookmark />
              <P>Bookmarks</P>
            </Navlink>
          </Li>
          <Li>
            <Navlink to="/Home">
              <IoIosList />
              <P>Lists</P>
            </Navlink>
          </Li>
          <Li selected={pathname === `user/${data.username}` ? true : false}>
            <Navlink to={`/user/${data.username}`}>
              <Img alt="user" src={data.photo} />
              <P>Profile</P>
            </Navlink>
          </Li>
          <Li>
            <Btn onClick={showModal}>
              <FiMoreHorizontal />
              <P>More</P>
            </Btn>
          </Li>
          <Li>
            <Button>
              <h3>Post</h3>
              <IoIosAdd />
            </Button>
          </Li>
        </Ul>
      ) : (
        <NavMore showModal={showModal} data={data} />
      )}
    </Div>
  );
};

export default NavBar;
