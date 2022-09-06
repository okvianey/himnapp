import * as React from 'react';
import { graphql } from 'gatsby'
import Layout from '../../components/layout';
import Seo from '../../components/seo';

import {
  Grid,
  // Container,
  Box,
  Typography,
  Paper
} from "@mui/material";

const HimnoPage = ({ data, children }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title} >
      {/* <Container> */}
      <Paper elevation={3} sx={{ padding: "100px 10px", }}>
        <Box sx={{ margin: "0 auto", maxWidth: "600px", }}>
          <Typography variant="h1" align="center" gutterBottom={true}>
            {data.mdx.frontmatter.title}
          </Typography>

          <Grid container p={2} sx={{ margin: "0 auto", maxWidth: "400px", }} >
            <Grid item p={2}>
              <Typography variant="body" align="center" paragraph={true}>
                {children}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      {/* </Container> */}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
export default HimnoPage;