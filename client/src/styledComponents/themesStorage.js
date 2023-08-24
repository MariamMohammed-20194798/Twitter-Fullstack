import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "LightMode",
  buttonTheme: "blue",
  changeTheme: (theme) =>
    set({
      theme: theme,
    }),
  changeButton: (buttonTheme) =>
    set({
      buttonTheme: buttonTheme,
    }),
}));
