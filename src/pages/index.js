import * as React from "react";
import { 
  Link,  
  graphql } from 'gatsby';

import Layout from "../components/layout";
import Seo from '../components/seo';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {
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

  return (
    <Layout pageTitle={"Home Page"} >
      <Box>
        <Typography variant='h1' mb={2}>Índice</Typography>
        <List sx={{ bgcolor: 'background.paper', overflow: 'auto', }}>
          { data.allMdx.nodes.map((node) => {
            const labelId = `checkbox-list-secondary-label-${node.id}`;
            if (node.frontmatter.slug === "00" ){
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
                  <Link
                    id={labelId}
                    to={`/himno/${node.frontmatter.slug}`}
                    style={{
                      width: "100%",
                      color: 'inherit',
                      textDecoration: 'none'
                    }} >
                    <ListItemButton color='inherit'>
                      {node.frontmatter.title}
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            } 
          })}
        </List>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query {
  allMdx(sort: {fields: frontmatter___slug, order: ASC}) {
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
`
export const Head = () => <Seo title="Himnario" />
export default IndexPage;