import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {
  InputBase
} from "@mui/material";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [ theme.breakpoints.up('sm') ]: {
    // width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.neutral.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 1, 1, 0),
    border: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
    borderRadius: '5px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [ theme.breakpoints.up('md') ]: {
      // width: '20ch',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    fontSize: "1.5rem",
  },
  '& .MuiInputBase-input:focus-visible': {
    outline: `${alpha(theme.palette.primary.main, 0.25)} auto 1px`,
  },
}));

export default function SearchBar({ handleSearch }) {
  
  return (
    <Search>
      <SearchIconWrapper>
          <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Buscar himno:"
        inputProps={{ 'aria-label': 'buscar' }}
        onChange={handleSearch}
      />
    </Search>
  );
}
