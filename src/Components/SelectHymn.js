import * as React from 'react';
import {
  Link,
  graphql,
  useStaticQuery
} from 'gatsby';

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from '@mui/icons-material/Search';
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
  // const [ selectedIndex, setSelectedIndex ] = React.useState("00");

  const handleMenuItemClick = () => {
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
      <ButtonGroup color='neutral' variant="outlined" ref={anchorRef} aria-label="split button group outline">
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
            {hymnNumber !== undefined ? 'Himno ' + hymnNumber  : 'Buscar himno'}
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
                <MenuList id="split-button-menu"  sx={{ p: 1 }}>
                  <Grid container spacing={0.5} columns={{ xs:6, sm: 12 }}>
                    { data.allMdx.nodes.map((node) => {
                      const index = node.frontmatter.slug; //Hymn Number selected

                      if (index === "00"){
                        return (
                        <Grid item xs={1} sm={2} key={node.id}>
                          <Link id={node.id} to={`/`}>
                            <MenuItem
                              key={node.id}
                              selected={index === hymnNumber}
                              onClick={() => handleMenuItemClick()}
                              sx={{
                                height: '50px',
                                textAlign: 'center',
                                justifyContent: 'center',
                                border: '1px solid gray',
                                borderRadius: '5px'
                              }}
                            > 
                              <SearchIcon color="disabled" />
                            </MenuItem>
                          </Link>
                        </Grid> 
                        )
                      } else {
                        return (
                          <Grid item xs={1} sm={2} key={node.id}>
                            <Link id={node.id} 
                              to={`/himno/${node.frontmatter.slug}`} 
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }} >
                              <MenuItem key={node.id}
                                selected={index === hymnNumber}
                                onClick={() => handleMenuItemClick()}
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
