import * as React from 'react';
import { graphql, Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react";
import Layout from '../../components/layout';
import Seo from '../../components/seo';

import {
  // Container,
  Box,
  Typography,
  Paper,
  Fab,
} from "@mui/material";

import { ArrowRightIcon, ArrowLeftIcon } from '@mui/icons-material/';


const HimnoPage = ({ data, children }) => {
  const shortcodes = { Link }

  return (
    <Layout >
      <Paper  sx={{ padding: "50px 10px", }}>
        <Typography variant="h1" align="center" gutterBottom>
          {data.mdx.frontmatter.title}
        </Typography>

        <Box align="center" 
          sx={{ 
            margin: "0 auto", 
            maxWidth: "400px", 
            textAlign: "center", 
            'ol': {
              padding: '10px 0',
              paddingInlineStart: '30px',
            }
          }} >
            <MDXProvider components={shortcodes}>
              {children}
            </MDXProvider>
            {/* <Fab color="primary" aria-label="add">
              <ArrowLeftIcon />
            </Fab>
            <Fab color="primary" aria-label="add">
             <ArrowRightIcon />
            </Fab> */}
        </Box>
      </Paper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
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