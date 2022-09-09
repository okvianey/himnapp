import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  MenuList,
  DialogTitle,
  Dialog,
  DialogContent
} from "@mui/material";

const SimpleDialog = ({ onClose, open, hymnNumber }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___order, order: ASC}) {
        nodes {
          id
          excerpt
          frontmatter {
            order
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <Dialog onClick={() => onClose()} open={open} fullWidth>
      <DialogTitle id="responsive-dialog-title" sx={{ px: 1 }}>{"Selecciona un himno:"}</DialogTitle>
      <DialogContent sx={{ p: 1, }}  >
        <MenuList
          id="split-button-menu"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "5px", 
          }}
        >
          {
            data.allMdx.nodes.map((node) => {
            const index = node.frontmatter.slug; //Hymn Number selected
            if (index === "0") {
              return (
                <MenuItem
                  key={node.id}
                  selected={index === hymnNumber}
                  disableGutters
                  // dense
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    border: "1px solid gray",
                    borderRadius: "5px",
                  }}
                  component={Link}
                  to={"/"}
                >
                  <SearchIcon color="disabled" />
                </MenuItem>
              );
            } else {
              return (
                <MenuItem
                  key={node.id}
                  selected={index === hymnNumber}
                  disableGutters
                  // dense
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    border: "1px solid gray",
                    borderRadius: "5px",
                  }}
                  component={Link}
                  to={`/himno/${node.frontmatter.slug}`}
                >
                  {node.frontmatter.slug}
                </MenuItem>
              );
            }})
          }
        </MenuList>
      </DialogContent>
    </Dialog>
  )
}

function SelectHymn({ hymnNumber }) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClosed = () => {
    setOpen(false);
  };

  return (
    <Box>
      <ButtonGroup color="neutral" variant="outlined">
        <Button
          size="small"
          sx={{
            width: "280px",
            justifyContent: "space-between",
          }}
          onClick={handleToggle}
        >
          {hymnNumber !== undefined ? "Himno " + hymnNumber : "Buscar himno"}
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <SimpleDialog
        hymnNumber={hymnNumber}
        open={open}
        onClose={handleClosed}
      />
    </Box>
  );
}

export default SelectHymn;