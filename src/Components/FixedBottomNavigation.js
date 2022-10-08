import * as React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material/";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function FixedBottomNavigation({ showFavorites, showIndex, isLog }) {
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

  }, [ location, currentPage ]);

  // const handleBack = () => {
  //   console.log(location);
  //   navigate(-1);
  // }

  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
      {
        isLog ? 
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
            {/* <BottomNavigationAction
                    label="Himno"
                    icon={<AutoStoriesIcon />}
                    onClick={handleBack}
                  /> */}
            
              
                  <BottomNavigationAction
                    label="Favoritos"
                    icon={<FavoriteIcon />}
                    onClick={showFavorites}
                  /> 
            
          </BottomNavigation> :
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
          </BottomNavigation>
        }
      </Paper>
    </Box>
  );
}