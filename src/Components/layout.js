import * as React from "react";
import { useLocation } from "@reach/router";

import FixedBottomNavigation from "./fixedBottomNavigation";
import ResponsiveAppBar from "./responsiveAppBar";

import {
  ColorModeContext,
} from "./context";

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
          body2: {
            fontSize: "1.5rem",
          },
        },
      }),
    [mode]
  );


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          
          <CssBaseline />
          <ResponsiveAppBar 
            mode={mode} 
            location={location} />
          <Container sx={{ padding: "180px 10px", maxWidth: { md: "600px" } }} >
            {children}
          </Container>
        <FixedBottomNavigation />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;