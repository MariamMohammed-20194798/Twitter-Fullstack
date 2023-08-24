import React from "react";
import Home from "./Pages/Home/Home";
import Welcome from "./Pages/Welcome/Welcome";
import Layout from "./../src/Components/Layout/Layout";
import { Div } from "./AppStyled";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import { ThemeProvider } from "styled-components";
import { themes } from "./styledComponents/themes";
import UserProfile from "./Pages/UserProfile/UserProfile";
import { useThemeStore } from "./styledComponents/themesStorage";

import DisplayBlock from "./Components/DisplayBlock/DisplayBlock";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const { theme, buttonTheme } = useThemeStore((state) => ({
    theme: state.theme,
    buttonTheme: state.buttonTheme,
  }));
  const mainTheme = {
    theme: themes[theme],
    buttonTheme: themes[buttonTheme],
  };
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Welcome /> },
        { path: "/Welcome", element: <Welcome /> },
        { path: "/Signup", element: <Signup /> },
        { path: "/SignIn", element: <Signin /> },
        { path: "/Display", element: <DisplayBlock /> },
        {
          path: "/Home",
          element: (
            <Layout>
              <Home />
            </Layout>
          ),
        },
        {
          path: "/UserProfile",
          element: (
            <Layout>
              <UserProfile />
            </Layout>
          ),
        },

        //{ path: "/Forgotpass", element: <Forgotpass /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Div>
        <RouterProvider router={router} />
      </Div>
    </ThemeProvider>
  );
}

export default App;
