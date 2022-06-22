import { useState, useEffect, createContext, useContext } from "react";

const themes = {
  light: {
    name: `light`,
    foreground: `black`,
    background: `white`,
    accent1: `black`,
    navBackground: `rgba(255,255,255,0.8)`,
    accent2: `black`,
    altBackground1: `#E9E9E9`,
    cardBackground: `rgba(255,255,255,1)`,
    wBackground: `transparent`,
    border: `1px solid black`,
    blogItemImageBG: `black`,
  },
  dark: {
    name: `dark`,
    foreground: `white`,
    background: `#070019`,
    accent1: `#aadcfe`,
    navBackground: `rgba(0,0,0,0.8)`,
    accent2: `#cee2ed`,
    altBackground1: `rgba(0,0,0,0.5)`,
    cardBackground: `#0d0029`,
    wBackground: `rgba(255,255,255,.1)`,
    border: `1px solid transparent`,
    blogItemImageBG: `#070019`,
  },
};

const ColorModeContext = createContext(null);

export const ColorModeFC = (props) => {
  const [colorTheme, setColorTheme] = useState();

  useEffect(() => {
    const currentColorTheme = localStorage.getItem("currentTheme");
    setColorTheme((v) => {
      if (currentColorTheme === "light") {
        return themes.light; // early return dankness
      } else if (currentColorTheme === "dark") {
        return themes.dark;
      }
      return themes.dark; // default dark mode
    });
    console.log(colorTheme)
  }, []);

  useEffect(() => {
    if (colorTheme?.name) {
      localStorage.setItem("currentTheme", `${colorTheme.name}`);
    }
    console.log(colorTheme);
  }, [colorTheme]);

  return (
    <>
      <ColorModeContext.Provider value={{ themes, colorTheme, setColorTheme }}>
        {typeof colorTheme?.name !== undefined && props.children}
      </ColorModeContext.Provider>
    </>
  );
};

export const useColorMode = () => {
  const { themes, colorTheme, setColorTheme } = useContext(ColorModeContext);
  return {
    themes,
    colorTheme,
    setColorTheme,
  };
};
