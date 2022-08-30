import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
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
});


export default theme;