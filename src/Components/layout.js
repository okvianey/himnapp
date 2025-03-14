import React, { useEffect, useMemo, useState } from "react";
import { ColorModeContext } from "./context";
import { CssBaseline, Container, GlobalStyles } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavbarTop from "./NavbarTop";
import BottomBar from "./BottomBar";

const useDefaultTheme = () => {
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return "light"; 

  const colorStorage = localStorage.getItem("color-mode");
  const systemColor = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return colorStorage === "light" || !systemColor ? "light" : "dark";
};


const Layout = ({ children }) => {
  const [ mode, setMode ] = useState(useDefaultTheme());

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#CC3945",
            light: "#D6606A",
            dark: "#8E2730",
          },
          secondary: {
            main: "#fffff",
          },
          neutral: {
            main: "#64748B",
            contrastText: "#fff",
            bgDark: "#2e2e2e",
            bgLight: "#fff"
          },
        },
        typography: {
          fontSize: 14,
          h1: {
            fontSize: "1.8rem",
          },
          h2: {
            fontSize: "1.5rem",
          },
          h3: {
            fontSize: "1.1rem",
          },
          body2: {
            fontSize: "1.4rem",
          },
        },
      }),
    [mode]
  );

  // Text Size
  const [textSize, setTextSize] = useState(() => {
    const isBrowser = typeof window !== "undefined";
    const textStorage = isBrowser ? localStorage.getItem("textSizeStorage") : "16";
    return parseInt(textStorage) || 16;
  });

  const handleTextSize = (direction) => {
    setTextSize((prevSize) => {
      if (direction === "up" && prevSize < 30) return prevSize + 1;
      if (direction === "down" && prevSize >= 12) return prevSize - 1;
      return prevSize;
    });
  };

  useEffect(() => {
    localStorage.setItem("color-mode", mode);
    localStorage.setItem("textSizeStorage", textSize);
  }, [mode, textSize]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
        />
        <NavbarTop 
          mode={mode} 
          handleTextSize={handleTextSize}
          textSize={textSize}
        />
        <BottomBar />
        <Container
          sx={{
            padding: "100px 10px",
            maxWidth: { md: "600px" },
            // color: "text.primary",
            'ol p': {
              fontSize: `${textSize}px`,
            },
            'p': {
              fontSize: `${textSize}px`,
            } 

          }} >
          {children}
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;