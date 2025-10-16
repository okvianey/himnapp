import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material/";
// import ListIcon from "@mui/icons-material/List";
import InfoIcon from '@mui/icons-material/Info';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BookIcon from '@mui/icons-material/Book';
import { Share } from "@mui/icons-material";

function BottomBar() {
  const location = useLocation();
  const currentPage = location.pathname;

  const value =
    currentPage.includes("about") ? 2 :
      currentPage.includes("himno") ? 1 :
      currentPage.includes("compartir") ? 3 : 0;

  return (
    <Paper
      color="inherit"
      sx={{
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        zIndex: 700,
      }}
      >

      <BottomNavigation
        color="inherit"
        showLabels
        value={value}
        sx={{
          height: 80,
          padding: "5px 0 0 0",
          alignItems: "flex-start"
        }}
      >
        <BottomNavigationAction
          label="Buscar"
          icon={<BookIcon />}
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
        <BottomNavigationAction
          label="Compartir"
          icon={<Share />}
          component={Link}
          to="/compartir"
        />

      </BottomNavigation> 
        
    </Paper>
  );
}

export default BottomBar;