import * as React from "react";
import { Link, navigate } from "gatsby";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material/";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function FixedBottomNavigation({ location }) {

  const [ currentPage, setCurrentPage ] = React.useState(location.pathname);
  const defaultValue = currentPage !== "/" ? 1 : 0
  // const defaultValue = 0;
  const [ value, setValue ] = React.useState(defaultValue);

  // Set bottom navigation
  // React.useEffect(() => {
  //   const handleValue = () => {
  //     currentPage.includes("himno") ? setValue(1) : setValue(0);
  //   };
  //   handleValue();
  // }, [ location, currentPage ]);

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
          <BottomNavigationAction
            label="Indice"
            icon={<ListIcon />}
            component={Link}
            to="/"
          />

        </BottomNavigation> 
          
      </Paper>
    </Box>
  );
}

export default FixedBottomNavigation;