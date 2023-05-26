import * as React from "react";
import { useLocation } from "@reach/router";
import { ColorModeContext } from "./context";
import ResponsiveAppBar from "./responsiveAppBar";
import FixedBottomNavigation from "./fixedBottomNavigation";
import { CssBaseline, Container } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Layout = ({ children }) => {
  const location = useLocation();

  // Dark Mode
  const colorStorage = window.localStorage.getItem("color-mode");
  const systemColor = window.matchMedia("(prefers-color-scheme: dark)");
  const defaultTheme = !systemColor.matches || colorStorage === "light" || colorStorage === undefined ?
    "light" : "dark";

  const [mode, setMode] = React.useState(defaultTheme);

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
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
  const textStorage = window.localStorage.getItem("textSizeStorage");
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
          location={location}
          handleTextSizeUp={handleTextSizeUp}
          handleTextSizeDown={handleTextSizeDown}
          textSize={textSize}
        />

        <Container
          sx={{
            padding: "180px 10px",
            maxWidth: { md: "600px" }, 
            'ol p': {
              fontSize: `${textSize}px`,
            },
            'p': {
              fontSize: `${textSize}px`,
            }
          }} >
          {children}
        </Container>
        <FixedBottomNavigation location={location} />

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;