import * as React from 'react';

export const ColorModeContext = React.createContext({ 
  toggleColorMode: () => { },
  colorDefault: () => { }
});

export const UserContext = React.createContext({
  handleChangeFavorites: () => { },
  handleToggleFavorites: () => { },
  favorites: [],
});

export const LoggedContext = React.createContext({
  toggleLogged: () => { },
  log: false,
})
