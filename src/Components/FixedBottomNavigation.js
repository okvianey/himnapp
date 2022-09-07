import * as React from "react";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction
  } from "@mui/material/";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from "gatsby";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [ currentPage, setCurrentPage ] = React.useState(''); ;
  const [ lastHymn, setLastHymn ] = React.useState("");

  React.useEffect(() => {
    setCurrentPage(window.location.href);
    const handleValue = () => {
      currentPage.includes('himno') ? setValue(1) : setValue(0)
    };
    handleValue();
  }, [ currentPage ])

  return (
    <Box>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Índice" icon={<ListIcon />} component={Link} to="/" />
          <BottomNavigationAction label="Himno" icon={<AutoStoriesIcon />} component={Link} to="/himno/05" />
          <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} component={Link} to="/himno/10" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
