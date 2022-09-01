import * as React from "react";
import { hymns } from '../assets/hymns';

import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { Container, Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const HimnoPage = () => {
  const theme = createTheme({
    typography: {
      fontSize: 16,
      h1: {
        fontSize: '2.1rem',
      },
      body1: {
        fontSize: '1.5rem',
      },
    },
  })

   return (
     <ThemeProvider theme={theme}> 
      <Container>
        <Paper>
           <Typography variant="h1">{hymns[ 0 ].number + hymns[ 0 ].title}</Typography>
          {
             hymns.map(himno => <Typography variant="h1">{hymns[ 0 ].coro}</Typography>)
          }

           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
             {hymns.map((value) => (
               <ListItem
                 key={value.number}
                 disableGutters
               >
                 <ListItemText primary={`Line item ${value}`} />
               </ListItem>
             ))}
           </List>

        </Paper>
        
      </Container>
    </ThemeProvider>
   )
}

export default HimnoPage;

export const Head = () => <title>Himno Page</title>