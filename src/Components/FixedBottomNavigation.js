import * as React from "react";
import { 
  useLocation,
  createHistory,
  navigate
  } from "@reach/router";
import { Link } from "gatsby";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction
  } from "@mui/material/";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function FixedBottomNavigation({ handleFilter, handleIndex }) {
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const [ currentPage, setCurrentPage ] = React.useState(location.pathname); ;
  const [ lastPage, setLastPage ] = React.useState();
 


  React.useEffect(() => {
    setCurrentPage(location.pathname);
    const handleValue = () => {
      currentPage.includes('himno') ? setValue(1) : setValue(0)
    };
    handleValue();
  }, [ location ]);

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
          <BottomNavigationAction label="Índice" onClick={() => handleIndex()} icon={<ListIcon />} component={Link} to="/" />
          <BottomNavigationAction label="Himno" icon={<AutoStoriesIcon />} onClick={() => { window.history.back() } } />
          {/* <BottomNavigationAction label="Himno" icon={<AutoStoriesIcon />} component={Link} to={"/himno/02"} /> */}
          <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} onClick={() => handleFilter()} />
          {/* <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} component={Link} to="/himno/10" /> */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
