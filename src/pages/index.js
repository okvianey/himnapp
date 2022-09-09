import * as React from "react";
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout";
import Seo from '../components/seo';
import SearchBar from '../components/searchBar';

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
    let checkWord = '' + e.target.value.toUpperCase();
    let himnosFiltrados = himnarioCompleto.filter((himno) => himno.frontmatter.title.includes(checkWord));

    setHimnario(himnosFiltrados);

    console.log(himnario);
    console.log(checkWord);
    // console.log(himnosFiltrados);
  }

  return (
    <Layout pageTitle={"Home Page"} >
      <Container>
        <Box 
          sx={{ 
            p: 2, 
            border: '1px dashed grey', 
            display: "flex", 
            justifyContent: "space-between" }}>
          <Typography variant='h1' mb={2}>Índice</Typography>
          <SearchBar handleSearch={handleSearch} />
        </Box>
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
      </Container>
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