import * as React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import HymnsList from "../Components/HymnsList";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FixedBottomNavigation from "../Components/FixedBottomNavigation";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
// import { Container, Box, Grid } from '@mui/material';
// import theme from "../style/theme";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const IndexPage = () => {
  //theme
  const [ mode, setMode ] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#CC3945",
            light: "#D6606A",
            dark: "#8E2730"
          },
          secondary: {
            main: "#fffff",
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        },
      }),
    [ mode ],
  );

  //Sign in
  const [ isLog, setIsLog ] = React.useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar mode={mode} setMode={setMode} isLog={isLog} />
        <HymnsList />
        <FixedBottomNavigation />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
