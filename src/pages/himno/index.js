import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
// import Seo from '../../Components/seo';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

const HimnarioPage = ({ data }) => {
  const [himnario, setHimnario] = useState(data);

  return (
    <Layout sx={{ padding: "0 !important" }}>
      <Box>
        <List sx={{ bgcolor: "background.paper", overflow: "auto" }}>
          {himnario.map((node) => {
            const keyId = node.id;

            if (node.frontmatter.slug === "0") {
              return <ListItem key={keyId}></ListItem>;
            } else {
              return (
                <ListItem key={keyId} disablePadding divider>
                  <ListItemButton
                    color="inherit"
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