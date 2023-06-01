import * as React from "react";

import { useLocation } from "@reach/router";
import { ColorModeContext } from "./context";
import ResponsiveAppBar from "./responsiveAppBar";
import FixedBottomNavigation from "./fixedBottomNavigation";
import { CssBaseline, Container } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Layout = ({ children }) => {

  const location = useLocation();
  const isBrowser = typeof window !== "undefined";

  // Dark Mode
  let defaultTheme = "dark";
  
  if (isBrowser) {
    const colorStorage = localStorage.getItem("color-mode");
    const systemColor = window.matchMedia("(prefers-color-scheme: dark)");
    defaultTheme = !systemColor.matches || colorStorage === "light" || colorStorage === undefined ? "light" : "dark";
  }

  const [ mode, setMode ] = React.useState(defaultTheme);




  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  React.useEffect(() => {
    window.localStorage.setItem("color-mode", mode);
  }, [mode]);

  const theme = React.useMemo(
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
          },
        },
        typography: {
          fontSize: 14,
          h1: {
            fontSize: "2.1rem",
          },
          h2: {
            fontSize: "1.8rem",
          },
          h3: {
            fontSize: "1.3rem",
          },
          body2: {
            fontSize: "1.5rem",
          },
        },
      }),
    [mode]
  );


  // Text Size
  let textStorage;
  if (isBrowser) {
    textStorage = localStorage.getItem("textSizeStorage");
  }
  const textSizeStorage = parseInt(textStorage);
  const textSizeDefault = textSizeStorage !== 16 ? textSizeStorage : 16;
  const [ textSize, setTextSize ] = React.useState(textSizeDefault);
  
  const handleTextSizeUp = () => {
    textSize < 30 ? setTextSize(textSize + 1) : setTextSize(16); 
  }
  const handleTextSizeDown = () => {
    textSize >= 12 ? setTextSize(textSize - 1) : setTextSize(textSize);
  }

  React.useEffect(() => {
    window.localStorage.setItem("textSizeStorage", textSize);
  }, [ textSize ])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar 
          mode={mode} 
          handleTextSizeUp={handleTextSizeUp}
          handleTextSizeDown={handleTextSizeDown}
          textSize={textSize}
        />

        <Container
          sx={{
            padding: "100px 10px",
            maxWidth: { md: "600px" }, 
            'ol p': {
              fontSize: `${textSize}px`,
            },
            'p': {
              fontSize: `${textSize}px`,
            }
          }} >

          {children}

          {theme.palette.mode === 'dark' ? <h1>dark</h1> : <h1>light</h1>}
        </Container>

          <FixedBottomNavigation />

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;