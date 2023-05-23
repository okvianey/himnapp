import * as React from "react";
import { useLocation, navigate } from "@reach/router";
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

export default function FixedBottomNavigation({ logged }) {
  const location = useLocation();

  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(location.pathname);

  // Set bottom navigation
  React.useEffect(() => {
    setCurrentPage(location.pathname);

    const handleValue = () => {
      currentPage === "/favorites" ? setValue(2) : currentPage.includes("himno") ? setValue(1) :
        setValue(0);
      // currentPage === "/favorites" ? setValue(2) : currentPage.includes("himno") ? setValue(1) :
      //   setValue(0);
    };

    handleValue();
  }, [ location, currentPage ]);

  return (
    <Box>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      {
        logged ? 
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Índice"
              // onClick={handleShowIndex}
              icon={<ListIcon />}
              component={Link}
              to="/"
            />
            <BottomNavigationAction
              label="Himno"
              icon={<AutoStoriesIcon />}
            />
            <BottomNavigationAction
              label="Favoritos"
              icon={<FavoriteIcon />}
              component={Link}
              to="/favorites"
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
              // onClick={handleShowIndex}
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