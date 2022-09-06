import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import FixedBottomNavigation from "./fixedBottomNavigation";
import ResponsiveAppBar from "./responsiveAppBar";

import { ColorModeContext } from "./context";

import { CssBaseline, Container } from '@mui/material/';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Layout = ({ children, hymnNumber }) => {
   const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
   // Dark Mode
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
            typography: {
               fontSize: 14,
               h1: {
                  fontSize: '2.1rem',
               },
               body2: {
                  fontSize: '1.5rem',
               },
            },
         }),
      [ mode ],
   );
   //Sign in
   const [ isLog, setIsLog ] = React.useState(false);

   return (
      <ColorModeContext.Provider value={colorMode}>
         <header>{ data.site.siteMetadata.title }</header>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar mode={mode} isLog={isLog} hymnNumber={hymnNumber} />
            <Container
               sx={{
                  padding: "180px 10px",
                  margin: '0 auto',
                  maxWidth: 560,
                  // bgcolor: 'background.paper'
               }}>
               {children}
            </Container>
            <FixedBottomNavigation />
         </ThemeProvider>
      </ColorModeContext.Provider>
   )
}

export default Layout;