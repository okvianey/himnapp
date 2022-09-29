import * as React from "react";
import { Link } from 'gatsby';
import logo from '../images/logo.svg';

import FixedBottomNavigation from "./fixedBottomNavigation";
// import ResponsiveAppBar from "./responsiveAppBar";

import { CssBaseline, Container, Box } from '@mui/material/';
import { ThemeProvider, useTheme } from '@mui/material/styles';

const LayoutSessions = ({ children }) => {
  const theme = useTheme();

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //         primary: {
  //           main: "#CC3945",
  //           light: "#D6606A",
  //           dark: "#8E2730"
  //         },
  //         secondary: {
  //           main: "#fffff",
  //         },
  //         neutral: {
  //           main: '#64748B',
  //           contrastText: '#fff',
  //         },
  //       },
  //       typography: {
  //         fontSize: 14,
  //         h1: {
  //           fontSize: '2.1rem',
  //         },
  //         body2: {
  //           fontSize: '1.5rem',
  //         },
  //       },
  //     }),
  //   [ mode ],
  // );
  //Sign in
  
  //const [ isLog, setIsLog ] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <ResponsiveAppBar mode={mode} isLog={isLog} hymnNumber={hymnNumber} /> */}
        <Container sx={{ padding: "5px", maxWidth: '600px', }}>
          <Box my={5} sx={{ textAlign: 'center' }}>
            <Link to="/"> <img src={logo} alt="logo" width={180} /></Link>
          </Box>
          {children}
        </Container>
        <FixedBottomNavigation />
    </ThemeProvider>
  )
}
export default LayoutSessions;