import * as React from 'react';

export const ColorModeContext = React.createContext({ 
  toggleColorMode: () => { },
  colorDefault: () => { }
});

export const UserContext = React.createContext({
  loadUser: () => { },
});
