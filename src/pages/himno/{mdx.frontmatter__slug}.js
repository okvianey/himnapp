import * as React from 'react';
import { graphql } from 'gatsby'
import Layout from '../../components/layout';
import Seo from '../../components/seo';

import {
  // Container,
  Box,
  Typography,
  Paper
} from "@mui/material";

const HimnoPage = ({ data, children }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title} hymnNumber={data.mdx.frontmatter.slug} >
      <Paper  sx={{ padding: "50px 10px", }}>
        <Typography variant="h1" align="center" gutterBottom={true}>
          {data.mdx.frontmatter.title}
        </Typography>

        <Box container align="center" 
          sx={{ 
            margin: "0 auto", 
            maxWidth: "400px", 
            textAlign: "center", 
            'ol': {
              padding: '10px 0',
              // listStylePosition: 'inside',
              paddingInlineStart: '30px',
            }
          }} >
            {children}
        </Box>
      </Paper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        slug
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
export default HimnoPage;