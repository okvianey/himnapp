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
  ButtonGroup,
} from "@mui/material/";
import PersonIcon from "@mui/icons-material/Person";

import logo from "../images/logo.svg";
import logoLight from "../images/logo-white.svg";

import DarkModeSwitch from "./darkModeSwitch";
import SelectHymn from "./selectHymn";
import { UserContext } from "./context";
import ButtonSign from "./buttonSign";

const ResponsiveAppBar = ({
  logged,
  setLogged,
  mode,
  showIndex,
  location }) => {

  const [ anchorElUser, setAnchorElUser ] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    setLogged((prev) => !prev);
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("logged");
    // localStorage.setItem("log-status", false);
    // handleUser.toggleStatus()
  }

  // const handleLogOut = () => {
  //   localStorage.removeItem("loggedUser");
  //   setUser({
  //     id: "",
  //     name: "",
  //     email: "",
  //     goal: "",
  //     joined: "",
  //   });
  //   setIsLog(false);
  // };



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
              {logged ? (
                  <MenuItem
                    key="signout"
                    color="black"
                    onClick={handleCloseUserMenu}
                    // component={Link}
                    // to={"/"}
                  >
                    <Typography textAlign="center">{"Salir"}</Typography>
                  </MenuItem>
                ) : 
                  (
                  <ButtonGroup orientation="vertical" onClick={handleCloseUserMenu}>
                    {/* <ButtonSignIn buttonText="Iniciar sesión" buttonVariant={"text"} />
                    <ButtonSignUp buttonText="Crear cuenta" buttonVariant={"text"} /> */}
                    <ButtonSign buttonText="Iniciar sesión" buttonVariant={"text"} />
                    <ButtonSign buttonText="Crear cuenta" buttonVariant={"text"} />
                  </ButtonGroup>
                )} 
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
            {logged ? (
              <Button
                key="signout"
                onClick={handleSignOut}
                variant="outlined"
                sx={{ m: 2, display: "block" }}
                // component={Link}
                // to={"/"}
              >
                {"Salir"}
              </Button>
            ) : (
              <Box sx={{ display: "flex" }}>
                <ButtonSign buttonText="Crear cuenta" buttonVariant={"outlined"} />
                <ButtonSign buttonText="Iniciar sesión" buttonVariant={"contained"} setLogged={setLogged} logged={logged} />  
              </Box>
            )}
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
