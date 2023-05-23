import * as React from "react";
import { Link } from "gatsby";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Divider,
} from "@mui/material/";

import logo from "../images/logo.svg";
import logoLight from "../images/logo-white.svg";

import DarkModeSwitch from "./darkModeSwitch";
import SelectHymn from "./selectHymn";

const ResponsiveAppBar = ({ mode }) => {

  const [ anchorElUser, setAnchorElUser ] = React.useState(null);

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar position="fixed" sx={{ backgroundColor: "background.default", p: 2, zIndex: 100 }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: { xs: "space-between", md: "space-around" },
          alignItems: "center",
        }}
      >
        <IconButton className="logo"
          component={Link}
          to="/"
          sx={{ width: { xs: "150px", md: "170px", padding: 0, margin: 0 } }}
        >
          <img
            src={mode === "light" ? logo : logoLight}
            alt="logo"
            width={"100%"}
          />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center" }}>
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
      <Container
        sx={{
          padding: "30px 0 20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
        }}
      >
        <SelectHymn />
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
