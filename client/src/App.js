import React from "react";
import { useEffect } from "react";
import instance from "./axios";
import { Div } from "./AppStyled";
import Layout from "./../src/Components/Layout/Layout";
import Welcome from "./Pages/Welcome/Welcome";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import UserProfile from "./Pages/UserProfile/UserProfile";
import { Notifications } from "./Pages/Notification/Notification";
import DisplayBlock from "./Components/DisplayBlock/DisplayBlock";
import { ThemeProvider } from "styled-components";
import { themes } from "./styledComponents/themes";
import { useThemeStore } from "./styledComponents/themesStorage";
import { useReloadState } from "./styledComponents/reloadStore";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const nav = useNavigate();
  const setReloadState = useReloadState((state) => state.setReloadState);
  const theme = useThemeStore((state) => state.theme);
  const buttonTheme = useThemeStore((state) => state.buttonTheme);
  const setTheme = useThemeStore((state) => state.getLocalStorage);
  setTheme();

  const mainTheme = {
    theme: themes[theme],
    buttonTheme: themes[buttonTheme],
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`users/me`);
        if (res.data.status === "success") {
          nav("/Home", { replace: true });
          setReloadState(false);
        }
        if (!res) {
          nav("/", { replace: true });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              index={true}
              path="/Home"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/Notification"
              element={
                <Layout>
                  <Notifications />
                </Layout>
              }
            />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />

            <Route
              path="/user/:userName"
              element={
                <Layout>
                  <UserProfile />
                </Layout>
              }
            />
            <Route path="/Display" element={<DisplayBlock />} />
          </Routes>
        </Div>
      </ThemeProvider>
    </>
  );
}

export default App;
