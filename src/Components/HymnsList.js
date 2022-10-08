import * as React from 'react';
import { Link } from 'gatsby';

import { hymns } from '../assets/hymns';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { 
  Box, 
  Container,
  List,
  ListItem,
  ListItemButton,
  Checkbox, 
  Typography
} from '@mui/material';

export default function HymnsList() {
  const [ checked, setChecked ] = React.useState([ 5 ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [ ...checked ];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <Container
      sx={{
        padding: "150px 0",
        margin: '0 auto',
        maxWidth: 560,
        bgcolor: 'background.paper' 
        }}>
        <Box>
        <Typography component='h1' variant='h5 ' >Índice</Typography>
          <List
            sx={{
              bgcolor: 'background.paper',
              overflow: 'auto',
            }}>
            {hymns.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value.number}`;
              return (
                <ListItem
                  key={value.number}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                  divider
                >
                  <ListItemButton color='inherit'>
                    <Link
                      id={labelId} 
                      to='/himno' 
                      style={{
                        color: 'inherit',
                        textDecoration: 'none'
                      }} >
                        {`${value.number}. ${value.title}`}
                      </Link>  
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
    </Container>
  );
}
