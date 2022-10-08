import * as React from "react";
import { Link } from "gatsby";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Divider,
} from "@mui/material/";
import PersonIcon from "@mui/icons-material/Person";

import logo from "../images/logo.svg";
import logoLight from "../images/logo-white.svg";

import DarkModeSwitch from "./darkModeSwitch";
import SelectHymn from "./selectHymn";

// const pages = [ 'Sign in', 'Log in' ];
const sessions = ["signin", "signup"];

const ResponsiveAppBar = ({ isLog, setIsLog, mode, showIndex, location }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log("🚀 ~ file: responsiveAppBar.js ~ line 33 ~ handleOpenUserMenu ~ event.currentTarget", event)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignout = () => {
    setIsLog((prev) => !prev);
    console.log('salir');
  }

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "background.default", p: 2, zIndex: 100 }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: { xs: "space-between", md: "space-around" },
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={showIndex}
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

          {
            location.pathname === '/signin' || location.pathname === '/signup' ?
              <div></div> :
              <div>
                {/* User Account Mobile */}
                <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                  <Tooltip title="Abrir settings">
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      <PersonIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>

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
                    {isLog ? (
                      <MenuItem
                        key="signout"
                        color="black"
                        onClick={handleCloseUserMenu}
                        component={Link}
                        to={"/"}
                      >
                        <Typography textAlign="center">{"Salir"}</Typography>
                      </MenuItem>
                    ) : 
                    (
                      sessions.map((session) => (
                        <MenuItem
                          key={session}
                          color="black"
                          onClick={handleCloseUserMenu}
                          component={Link}
                          to={`/${session}`}
                        >
                          <Typography textAlign="center">
                            {session === "signin" ? "Iniciar Sesión" : "Crear cuenta"}
                          </Typography>
                        </MenuItem>
                      ))
                    )}
                  </Menu>
                </Box>


                {/* User Account Desktop */}
                <Box
                  className="desktop-nav-links"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-end",
                  }}
                >
                  {isLog ? (
                    <Button
                      key="signout"
                      onClick={handleSignout}
                      variant="outlined"
                      sx={{ m: 2, display: "block" }}
                      component={Link}
                      to={"/"}
                    >
                      {"Salir"}
                    </Button>
                  ) : (
                    <Box sx={{ display: "flex" }}>
                      <Button
                        key="Crear Cuenta"
                        onClick={handleCloseUserMenu}
                        variant="outlined"
                        sx={{ m: 1, display: "block" }}
                        component={Link}
                        to={"/signup"}
                      >
                        Crear Cuenta
                      </Button>
                      <Button
                        key="Iniciar Sesión"
                        onClick={handleCloseUserMenu}
                        variant="contained"
                        sx={{ m: 1, display: "block" }}
                        component={Link}
                        to={"/signin"}
                      >
                        Iniciar Sesión
                      </Button>
                    </Box>
                  )}

                </Box>
              </div>
          }

          
        </Box>

      </Toolbar>
      {
        location.pathname === '/signin' || location.pathname === '/signup' ?
          <div></div> :
          (<div>
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
          </div>)
      }

      
    </AppBar>
  );
};

export default ResponsiveAppBar;
