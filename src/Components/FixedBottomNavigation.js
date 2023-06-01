import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import {
  CssBaseline,
  Box,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material/";
import ListIcon from "@mui/icons-material/List";
import InfoIcon from '@mui/icons-material/Info';
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function FixedBottomNavigation() {
  const location = useLocation();
  const currentPage = location.pathname;
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
    <Container >
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, }} elevation={3}>
      
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
          <BottomNavigationAction
            label="Info"
            icon={<InfoIcon />}
            component={Link}
            to="/about"
          />

        </BottomNavigation> 
          
      </Paper>
    </Container>
  );
}

export default FixedBottomNavigation;