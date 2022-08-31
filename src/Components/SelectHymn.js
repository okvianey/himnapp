import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Box, Grid } from '@mui/material';

const himnos = [ '', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' ];

export default function SelectHymn() {
  const [ open, setOpen ] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [ selectedIndex, setSelectedIndex ] = React.useState(0);

  // const handleClick = () => {
  //   console.info(`You clicked ${himnos[ selectedIndex ]}`);
  // };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <ButtonGroup 
        color='neutral' 
        variant="outlined" 
        ref={anchorRef} 
        aria-label="split button group outline">
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          sx={{
            width: '280px',
            justifyContent: 'space-between',
          }}
          onClick={handleToggle}>
          {'Himno ' + himnos[ selectedIndex ]}
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{
          maxWidth: '453px'
        }}
       
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper elevation={3}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList 
                  id="split-button-menu" 
                  autoFocusItem 
                  sx={{
                  p: 1
                }}>
                  <Grid container spacing={0.5} columns={{ xs:6, sm: 12 }}>
                      {himnos.map((option, index) => (
                        <Grid item xs={1} sm={2} key={option}>
                          <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                            sx={{
                              height: '50px',
                              textAlign: 'center',
                              justifyContent: 'center',
                              border: '1px solid gray',
                              borderRadius: '5px'
                            }}
                          >
                            {option}
                            </MenuItem>
                          </Grid>
                    ))}
                    </Grid>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
