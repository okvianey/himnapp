import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material/";
import ListIcon from "@mui/icons-material/List";
import InfoIcon from '@mui/icons-material/Info';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function FixedBottomNavigation() {
  const location = useLocation();
  const currentPage = location.pathname;

  // const handleActive = () => {
  //   currentPage.includes("himno") ? setValue(1) : setValue(0);
  // }

  const [ value, setValue ] = React.useState(currentPage.includes("/about") ? 2 : !currentPage.includes("/himno") ? 0 : 1);


  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 700 }} elevation={3}>

      <BottomNavigation
        showLabels
        value={value}
        sx={{ backgroundColor: "background.default" }}
      >
        <BottomNavigationAction
          label="Indice"
          icon={<ListIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Himno"
          icon={<AutoStoriesIcon />}
          disabled
        />
        <BottomNavigationAction
          label="Info"
          icon={<InfoIcon />}
          component={Link}
          to="/about"
        />

      </BottomNavigation> 
        
    </Box>
  );
}

export default FixedBottomNavigation;