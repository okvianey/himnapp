import * as React from 'react';
import { graphql, Link } from 'gatsby'
import { useLocation } from "@reach/router";
import Layout from '../../components/layout';
import Seo from '../../components/seo';

import {
  Box,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HimnoPage = ({ data, children }) => {

  const location = useLocation();
  
  const pathURL = location.pathname.split("/");
  const hymnNumber = pathURL.filter(item => item !== "himno" && item !== "" && item !== "himnapp").join();
  const page = parseInt(hymnNumber);

  return (
    <Layout >
      <Paper sx={{ padding: "10px 10px", }}>        

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
            },
            
          }} >

            {children}

          {/* back page button */}
          <IconButton
            disabled={page === 1 ? true : false }
            sx={{
              position: "fixed",
              bottom: "12px",
              left: "20px",
              zIndex: "800",
            }}
            component={Link}
            to={`/himno/${page - 1}`}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {/* next page button */}
          <IconButton
            disabled={page === 49 ? true : false}
            sx={{
              position: "fixed",
              bottom: "12px",
              right: "20px",
              zIndex: "800",
            }}
            component={Link}
            to={`/himno/${page + 1}`}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>


      </Paper>

    </Layout>
  );
};

export const query = graphql`
query ($id: String = "id") {
  mdx(id: {eq: $id}) {
    frontmatter {
      order
      slug
      title
    }
  }
}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
export default HimnoPage;