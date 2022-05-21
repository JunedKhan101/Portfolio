import React, { useState, createContext } from "react";
import Main from "./Main";
import "../css/app.css";

export const ThemeContext = createContext(null);

function App() {
  const [themeflag, setThemeFlag] = useState(false); // false for light, true for dark theme
  var theme = themeflag ? "dark" : "light";
  const toggleTheme = () => {
    setThemeFlag(themeflag => !themeflag);
  }
  var html = document.getElementsByTagName("html")[0];
  var body = document.getElementsByTagName("body")[0];
  if (theme === "dark" && themeflag === true) {
    html.style.backgroundColor = "#1b1e21";
    body.style.backgroundColor = "#1b1e21";
    body.style.color = "#EEE";
  }
  else if (theme === "light" && themeflag === false) {
    html.style.backgroundColor = "#FFFFFF";
    body.style.backgroundColor = "#FFFFFF";
    body.style.color = "#000000";
  }
  return (
    <ThemeContext.Provider value={{themeflag, theme, toggleTheme}}>
      <div className="app" id={theme}>
        <Main />
	    </div>
    </ThemeContext.Provider>
  );
}

export default App;
