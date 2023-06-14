import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
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
import SelectHymn from "./selectHymn";

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
  handleTextSizeUp,
  handleTextSizeDown,
  textSize,
}) => {
  const location = useLocation();
  const currentPage = location.pathname;
  // const hasNumber = /\d+/;
  // console.log("mode", mode)

  const [ anchorElUser, setAnchorElUser ] = React.useState(null);

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      sx={{
        backgroundColor: "background.default",
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
          className={"styles.cont"}
          component={Link}
          to="/"
          sx={{
            width: { xs: "150px", md: "170px", "borderRadius": "0", }
          }}
        >
          {
            mode === "dark" ? 
              <img
                src={logoWhite}
                alt="logo"
                width={"100%"}
              /> :
              <img
                src={logo}
                alt="logo"
                width={"100%"}
              />
          }
          
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <DarkModeSwitch mode={mode} />
            {/* User Account Mobile */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <Menu
                className="mobile-nav-links"
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
              </Menu>
            </Box>
            {/* User Account Desktop */}
            <Box className="desktop-nav-links"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
            </Box>
        </Box>
      </Toolbar>

      <Divider />

    
      {currentPage.includes("about") ?
        <br /> :
        <TextZoomBox>
          <SelectHymn /> 
          <Box m={"5px"}>
            <ButtonGroup
              size="medium"
              color="neutral"
              variant="outlined"
            >
              <Button
                disabled={textSize < 12 ? true : false}
                onClick={handleTextSizeDown}><TextDecrease sx={{ fontSize: "1rem" }} /></Button>
              <Button
                disabled={textSize > 29 ? true : false}
                onClick={handleTextSizeUp}
              ><TextIncrease sx={{ fontSize: "1rem" }} /></Button>
            </ButtonGroup>
          </Box>
        </TextZoomBox> 
      }
    
    </AppBar>
  );
};

export default NavbarTop;
