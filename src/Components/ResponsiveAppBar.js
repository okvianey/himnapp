import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import logo from '../images/logo.svg';
import logoLight from '../images/logo-white.svg';
// import { useTheme } from '@mui/material/styles';

import DarkModeSwitch from './DarkModeSwitch';
import SelectHymn from './SelectHymn';

// const pages = [ 'Sign in', 'Log in' ];
const settings = [ 'Salir' ];
const sessions = [ 'Iniciar Sesión', 'Crear una cuenta' ];

const ResponsiveAppBar = ({ isLog, setMode, mode }) => {
  const [ anchorElUser, setAnchorElUser ] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "background.default", p: 1, zIndex: 100 }}>
      <Container maxWidth="xl" sx={{ p: 0 }} >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

          <IconButton edge="end" size="large">
            <img src={mode === "light" ? logo : logoLight} width={100} alt="logo" />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center' }}> 
            <DarkModeSwitch setMode={setMode} />
            {/* User Account Mobile */}
            <Box sx={{ flexGrow: 0, m: 1, display: { xs: 'flex', md: 'none' }, }}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  sx={{ p: 1 }}>
                  <PersonIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                { isLog ? 
                  settings.map((setting) => (
                  <MenuItem key={setting} color="black" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>)) :
                  sessions.map((session) => (
                    <MenuItem key={session} color="black" onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{session}</Typography>
                    </MenuItem>
                  ))
                }
              </Menu>
            </Box>
            {/* User Account Desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {
                isLog ? 
                  settings.map((setting) => (
                  <Button
                    key={setting}
                    onClick={handleCloseUserMenu}
                    variant='outlined'
                    sx={{ m: 2, display: 'block' }}
                  >
                    {setting}
                  </Button>
                  )) :
                  (
                    <Box sx={{ display: 'flex'} }>
                      <Button
                        key='Crear Cuenta'
                        onClick={handleCloseUserMenu}
                        variant= 'outlined'
                        sx={{ m: 1, display: 'block'}}
                      >
                        Crear Cuenta
                      </Button>
                      <Button
                        key='Iniciar Sesión'
                        onClick={handleCloseUserMenu}
                        variant= 'contained'
                        sx={{ m: 1, display: 'block'}}
                      >
                        Iniciar Sesión
                      </Button>
                    </Box>
                  )
              }
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Divider />
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
        <SelectHymn />
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
