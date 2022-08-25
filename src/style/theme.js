import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#CC3945",
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