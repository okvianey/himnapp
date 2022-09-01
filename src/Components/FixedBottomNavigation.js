import * as React from 'react';
import { Link } from 'gatsby';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';



export default function FixedBottomNavigation() {
  const [ value, setValue ] = React.useState(0);

  return (
    <Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Índice" icon={<ListIcon />} 
          // onClick={<Link to="/">Back to Home</Link>} 

          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}