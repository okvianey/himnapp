import * as React from 'react';
import { graphql, Link } from 'gatsby'
import { useLocation } from "@reach/router";
import Layout from '../../components/layout';
import Seo from '../../components/seo';

import {
  Box,
  Typography,
  Paper,
  Fab,
} from "@mui/material";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HimnoPage = ({ data, children }) => {

  const location = useLocation();
  const hasNumber = /\d+/;
  const hymnNumber = location.pathname.match(hasNumber);
  const page = parseInt(hymnNumber);
  

  return (
    <Layout >
      <Paper sx={{ padding: "10px 10px" }}>        

        <Typography variant="h1" align="center" gutterBottom>
          {data.mdx.frontmatter.title}
        </Typography>

        <Box align="center" 
          sx={{ 
            padding: "0 2px",
            margin: "0 auto", 
            maxWidth: "400px", 
            textAlign: "center", 
            'ol': {
              padding: '5px 0',
              paddingInlineStart: '10px',
            },
            
          }} >

            {children}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "fixed",
              bottom: "95px",
              left: "0",
              zIndex: "800",
              width: "100%",
              padding: "0 5px"
          }}>
            <Fab
              size='small'
              disabled={page === 1 ? true : false}
              component={Link}
              to={`/himno/${page - 1}`}
              sx={{
                opacity: "0.3",
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  opacity: '1',
                }
              }}
            >
              <ArrowBackIosIcon />
            </Fab>

            <Fab
              size='small'
              disabled={page >= 199 ? true : false}
              component={Link}
              to={`/himno/${page + 1}`}
              sx={{
                opacity: "0.3",
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  opacity: '1',
                }
              }}
            >
              <ArrowForwardIosIcon sx={{ fonsSize: "5px"}} />
            </Fab>
          </Box>

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