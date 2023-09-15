import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "LightMode",
  buttonTheme: "blue",
  getLocalStorage: () => {
    // const localStorageTheme = localStorage.getItem("finalTheme");
    const localStorageButtonTheme = localStorage.getItem("finalTheme");

    /*  if (localStorageTheme) {
      set({ theme: localStorageTheme });
    } */
    if (localStorageButtonTheme) {
      set({ theme: localStorageButtonTheme });
    }
  },
  changeTheme: (theme) =>
    set({
      theme: theme,
    }),
  changeButton: (buttonTheme) =>
    set({
      buttonTheme: buttonTheme,
    }),
}));
