import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import {
  AppBar,
  Box,
  Toolbar,
  Divider,
  IconButton,
  Button,
  ButtonGroup,
} from "@mui/material/";
import { styled } from '@mui/material/styles';
import {
  TextIncrease,
  TextDecrease,
} from '@mui/icons-material';
import logo from "../images/logo.svg";
import logoWhite from "../images/logo-white.svg";
import DarkModeSwitch from "./darkModeSwitch";
import ComboBox from "./comboBox";

const TextZoomBox = styled('div')(({ theme }) => ({
  padding: "15px 10px 0 10px",
  display: "flex",
  justifyContent: "space-evenly",
  [ theme.breakpoints.down('sm') ]: {
    flexDirection: "column",
    alignItems: "center",
  }
}))

const NavbarTop = ({
  mode,
  handleTextSize,
  textSize,
}) => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <AppBar
      // enableColorOnDark 
      color="inherit"
      position="fixed"
      sx={{
        // backgroundColor: "background.default",
        // backgroundColor: `primary.${mode}`,
        padding: "10px",
        zIndex: 100
      }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: { xs: "space-between", md: "space-around" },
          alignItems: "center",
        }}
      >
        <IconButton
          component={Link}
          to="/"
          sx={{
            width: { xs: "150px", md: "170px", "borderRadius": "0", }
          }}
        >
          {
            mode === "dark" ? 
              <img src={logoWhite} alt="logo" width={"100%"} /> :
              <img src={logo} alt="logo" width={"100%"} />
          }
        </IconButton>
        <DarkModeSwitch mode={mode} />
      </Toolbar>

      <Divider />

      {
        currentPage.includes("about") ? <span></span> : 

        <TextZoomBox sx={{ justifyContent: "center", alignItems: "center" }}>
          {
            !currentPage.includes("himno") ? <span></span> : <ComboBox />
          }
          <Box m={"5px"}>
            <ButtonGroup
              size="medium"
              color="neutral"
              variant="outlined"
            >
              <Button
                disabled={textSize <= 12}
                onClick={() => handleTextSize("down")}>
                  <TextDecrease sx={{ fontSize: "1rem" }} />
              </Button>
              <Button
                disabled={textSize >= 30}
                onClick={() => handleTextSize("up")}
                >
                  <TextIncrease sx={{ fontSize: "1rem" }} />
              </Button>
            </ButtonGroup>
          </Box>
        </TextZoomBox> 
      }
    
    </AppBar>
  );
};

export default NavbarTop;
