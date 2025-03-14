import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
// import Seo from '../../Components/seo';
import {
  Paper,
  Box,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

const HimnarioPage = ({ data }) => {
  const himnario = data.allMdx.nodes;

  return (
    <Layout sx={{ padding: "0 !important" }}>
      <Paper>
        <Box>
          {/* <List sx={{ overflow: "auto" }}> */}
          <List sx={{ bgcolor: "background.paper", overflow: "auto" }}>
            {himnario.map((node) => {
              const keyId = node.id;

              if (node.frontmatter.slug === "0") {
                return <ListItem key={keyId}></ListItem>;
              } else {
                return (
                  <ListItem key={keyId}
                    disablePadding
                    divider
                  >
                    <ListItemButton
                      color="inherit"
                      disablePadding
                      component={Link}
                      to={`/himno/${node.frontmatter.slug}`}
                    >
                      {node.frontmatter.title}
                    </ListItemButton>
                  </ListItem>
                );
              }
            })}
          </List>
        </Box>
      </Paper>
    </Layout>
  )
}

export const query = graphql`
  query {
  allMdx(sort: {frontmatter: {order: ASC}}) {
    nodes {
      frontmatter {
        title
        slug
        order
      }
      id
    }
  }
}`

// export const Head = () => <Seo title="Lista de himnos" />

export default HimnarioPage