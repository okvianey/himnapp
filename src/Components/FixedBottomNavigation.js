import * as React from "react";
import { useLocation, createHistory, navigate } from "@reach/router";
import { Link } from "gatsby";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material/";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function FixedBottomNavigation({ showFavorites, showIndex }) {
  const location = useLocation();
  // let history = window.history;
  // console.log("🚀 ~ file: fixedBottomNavigation.js ~ line 17 ~ FixedBottomNavigation ~ history", history)

  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(location.pathname);
  // const [lastPage, setLastPage] = React.useState();

  // Set bottom navigation
  React.useEffect(() => {
    setCurrentPage(location.pathname);
    const handleValue = () => {
      currentPage.includes("himno") ? setValue(1) : setValue(0);
    };
    handleValue();
  }, [location]);

  const handleBack = () => {
    // let lastPage = history.back();
    // console.log("🚀 ~ file: fixedBottomNavigation.js ~ line 32 ~ handleBack ~ lastPage", lastPage)

    
    // if (lastPage !== "/") {
    //   console.log("🚀 ~ file: fixedBottomNavigation.js ~ line 31 ~ handleBack ~ lastPage", lastPage)
    //   window.history.back() 
    // } else if (lastPage === "/"){
    //   console.log("testing");
    // }
  }

  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Índice"
            onClick={showIndex}
            icon={<ListIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Himno"
            icon={<AutoStoriesIcon />}
            onClick={handleBack}
          />
          {/* <BottomNavigationAction label="Himno" icon={<AutoStoriesIcon />} component={Link} to={"/himno/02"} /> */}
          <BottomNavigationAction
            label="Favoritos"
            icon={<FavoriteIcon />}
            onClick={showFavorites}
          />
          {/* <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} component={Link} to="/himno/10" /> */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}