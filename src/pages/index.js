import * as React from "react";
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout";
import Seo from '../components/seo';
import SearchBar from '../components/searchBar';

import { styled } from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {
  Container,
  Box,
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

  const himnarioCompleto = data.allMdx.nodes;
  const [ himnario, setHimnario ] = React.useState(data.allMdx.nodes);

  const handleSearch = (e) => {
    e.preventDefault();
    let checkWord = '' + e.target.value.toUpperCase();
    let himnosFiltrados = himnarioCompleto.filter((himno) => himno.frontmatter.title.includes(checkWord));
    setHimnario(himnosFiltrados);
  }


  return (
    <Layout pageTitle={"Home Page"} >
        <StyledSearchBox>
          <Typography variant='h1' mb={2}>Índice</Typography>
          <SearchBar handleSearch={handleSearch} />
        </StyledSearchBox>
        <List sx={{ bgcolor: 'background.paper', overflow: 'auto', }}>
          {himnario.map((node) => {
            const labelId = `checkbox-list-secondary-label-${node.id}`;
            if (node.frontmatter.slug === "0" ){
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
                      checked={checked.indexOf(node) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                  divider
                >
                  <ListItemButton color='inherit' component={Link} to={`/himno/${node.frontmatter.slug}`} >
                    {/* {console.log(node.frontmatter.slug)} */}
                    {node.frontmatter.title}
                  </ListItemButton>
                </ListItem>
              );
            } 
          })}
        </List>
    </Layout>
  )
}

export const query = graphql`
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
`
export const Head = () => <Seo title="Himnario" />
export default IndexPage;