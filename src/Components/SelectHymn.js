import * as React from 'react';
import { Link } from 'gatsby'

import { hymns } from '../assets/hymns';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { 
  Box, 
  Grid,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList, 
} from "@mui/material";

// const himnos = [ '', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' ];

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
    console.log(selectedIndex);
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
            onClick={handleToggle}
            >
            {'Himno ' + hymns[ selectedIndex ].number}
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
                        {hymns.map((option, index) => (
                          <Grid item xs={1} sm={2} key={option.number}>
                            <MenuItem
                              key={option.number}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                              // onClick={(event) => handleMenuItemClick(event, index)}
                              sx={{
                                height: '50px',
                                textAlign: 'center',
                                justifyContent: 'center',
                                border: '1px solid gray',
                                borderRadius: '5px'
                              }}
                            >
                              {/* {option.number} */}

                              <Link id={option.number} to="/himno">
                                {option.number}
                              </Link>
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
