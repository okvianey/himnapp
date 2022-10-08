import * as React from "react";
import { useLocation, 
  // createHistory, 
  // navigate 
} from "@reach/router";


import FixedBottomNavigation from "./fixedBottomNavigation";
import ResponsiveAppBar from "./responsiveAppBar";

import { ColorModeContext } from "./context";

import { CssBaseline, Container } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { LocationSearching } from "@mui/icons-material";


const Layout = ({ children, handleShowFavorites, handleShowIndex, isLog, setIsLog }) => {
  const location = useLocation();

  // Dark Mode
  const colorStorage = window.localStorage.getItem("color-mode");
  const systemColor = window.matchMedia("(prefers-color-scheme: dark)");

  const defaultTheme =
    !systemColor.matches ||
    colorStorage === "light" ||
    colorStorage === undefined
      ? "light"
      : "dark";

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

  // let theme = createTheme({
  //    palette: {
  //       mode,
  //       primary: {
  //          main: "#CC3945",
  //          light: "#D6606A",
  //          dark: "#8E2730"
  //       },
  //       secondary: {
  //          main: "#fffff",
  //       },
  //       neutral: {
  //          main: '#64748B',
  //          contrastText: '#fff',
  //       },
  //    },
  //    typography: {
  //       fontSize: 14,
  //       h1: {
  //          fontSize: '2.1rem',
  //       },
  //       body2: {
  //          fontSize: '1.5rem',
  //       },
  //    },
  // });

  //Sign in
  
  // const location = useLocation();
  // window.localStorage.setItem(history, myHistory);
 
  // const handleBack = () => {
  //   if (location.pathname !== "/"){
  //     navigate(-1);
  //   } 
  //   navigate(-1)
  // }



  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar 
          mode={mode} 
          isLog={isLog} 
          setIsLog={setIsLog}
          showIndex={handleShowIndex} 
          location={location} />
        <Container sx={{ padding: "180px 10px", maxWidth: { md: "600px" } }}>
          {children}
        </Container>
        <FixedBottomNavigation
          showFavorites={handleShowFavorites}
          showIndex={handleShowIndex}
          // handleBack={handleBack}
          isLog={isLog} 
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;