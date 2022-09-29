import * as React from "react";
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout";
import Seo from '../components/seo';
import SearchBar from '../components/searchBar';

import { styled } from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {
  List,
  ListItem,
  ListItemButton,
  Checkbox,
  Typography
} from '@mui/material';

const StyledSearchBox = styled('div')(({ theme }) => ({
  padding: 20,
  border: '1px dashed grey',
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center',
  [ theme.breakpoints.down('sm') ]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const IndexPage = ({ data }) => {  

  const himnarioCompleto = data.allMdx.nodes;
  const [ himnario, setHimnario ] = React.useState(data.allMdx.nodes);
  
  const handleSearch = (e) => {
    e.preventDefault();
    let checkWord = '' + e.target.value.toUpperCase();
    let himnosFiltrados = himnarioCompleto.filter((himno) => himno.frontmatter.title.includes(checkWord));
    setHimnario(himnosFiltrados);
  }
  
  // Favorites selection
  const [ favorites, setFavorites ] = React.useState([]);
  const [ showFilter, setShowFilter ] = React.useState(false);


  // React.useEffect(() => {
  //   window.localStorage.setItem('favorite-hymns', favorites)
  // }, [ favorites ]);

  const handleToggle = (value) => () => {
    const currentIndex = favorites.indexOf(value);
    const newFavorite = [ ...favorites ];

    if (currentIndex === -1) {
      newFavorite.push(value);
    } else {
      newFavorite.splice(currentIndex, 1);
    }
    setFavorites(newFavorite);

  };

  // Favorite filter
  const handleFilter = () => {
    setShowFilter(true);
  }

  const handleIndex = () => {
    setShowFilter(false);
  }

  return (
    <Layout handleFilter={handleFilter} handleIndex={handleIndex} >
        <StyledSearchBox>
          <Typography variant='h1' mb={2}>Índice</Typography>
          <SearchBar handleSearch={handleSearch} />
        </StyledSearchBox>
        { showFilter ?
        (<List sx={{ bgcolor: 'background.paper', overflow: 'auto', }}>

          {favorites.map((node) => {
            const labelId = `checkbox-list-secondary-label-${node.id}`;

            if (node.frontmatter.slug === "0") {
              return (
                <ListItem key={node.id}>
                </ListItem>
              );
            } else {
              return (
                <ListItem
                  key={node.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleToggle(node)}
                      checked={favorites.indexOf(node) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                  divider
                >
                  <ListItemButton color='inherit' component={Link} to={`/himno/${node.frontmatter.slug}`} >
                    {node.frontmatter.title}
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List> ):
        (<List sx={{ bgcolor: 'background.paper', overflow: 'auto', }}>

          {himnario.map((node) => {
            const labelId = `checkbox-list-secondary-label-${node.id}`;

            if (node.frontmatter.slug === "0") {
              return (
                <ListItem key={node.id}>
                </ListItem>
              );
            } else {
              return (
                <ListItem
                  key={node.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleToggle(node)}
                      checked={favorites.indexOf(node) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                  divider
                >
                  <ListItemButton color='inherit' component={Link} to={`/himno/${node.frontmatter.slug}`} >
                    {node.frontmatter.title}
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List>)
        }
        
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___order, order: ASC}) {
      nodes {
        id
        frontmatter {
          order
          slug
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Himnario" />
export default IndexPage;