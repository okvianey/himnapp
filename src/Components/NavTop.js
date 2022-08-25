import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../images/logo.svg';
import SelectHymn from './SelectHymn';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2)
}));
const StyledSelect = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2)
}));

export default function NavTop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <StyledToolbar>
          <IconButton edge="end" size="large">
            <img src={logo} width={100} alt="logo" />
          </IconButton>
          <div>
            <Switch />
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <PersonIcon />
            </IconButton>

          </div>
        </StyledToolbar>
        <StyledSelect >
          <SelectHymn />
        </StyledSelect>
    </Box>
  );
}
