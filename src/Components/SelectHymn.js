import * as React from 'react';
import {
  Link,
  graphql,
  useStaticQuery
} from 'gatsby';

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

const SelectHymn = ({ hymnNumber }) => {
  const data = useStaticQuery(graphql` 
    query {
      allMdx(sort: { fields: frontmatter___slug, order: ASC }) {
        nodes {
          frontmatter {
            slug
            title
          }
          id
          excerpt
        }
      }
    }
  `)

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
      <ButtonGroup color='neutral' variant="outlined" ref={anchorRef}aria-label="split button group outline">
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
            { hymnNumber !== undefined ? 'Himno ' + hymnNumber : 'Buscar himno'}
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
          maxWidth: '453px' 
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        // style={{ maxWidth: '453px' }}
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
                <MenuList id="split-button-menu" autoFocusItem sx={{ p: 1 }}>
                  <Grid container spacing={0.5} columns={{ xs:6, sm: 12 }}>
                    { data.allMdx.nodes.map((node, index) => {

                      if (index === 0){
                        return (
                        <Grid item xs={1} sm={2} key={node.id}>
                          <Link id={node.id} to={`/`}>
                            <MenuItem
                              key={node.id}
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
                            </MenuItem>
                          </Link>
                        </Grid> 
                        )
                      } else {
                        return (
                          <Grid item xs={1} sm={2} key={node.id}>
                            <Link id={node.id} to={`/himno/${node.frontmatter.slug}`}>
                              <MenuItem
                                key={node.id}
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
                                {node.frontmatter.slug}
                              </MenuItem>
                            </Link>
                          </Grid>
                        )
                      }
                    })}
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

export default SelectHymn;
