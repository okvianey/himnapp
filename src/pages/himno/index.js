import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import SearchBar from "../../components/searchBar";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

const StyledSearchBox = styled("div")(({ theme }) => ({
  padding: 20,
  border: "1px dashed grey",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [ theme.breakpoints.down("sm") ]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const HimnarioPage = ({ data }) => {
  const himnarioCompleto = data.allMdx.nodes;
  const [himnario, setHimnario] = React.useState(data.allMdx.nodes);


  const handleSearch = (e) => {
    // e.preventDefault();
    // let checkWord = "" + e.target.value.toUpperCase();
    // let himnosFiltrados = himnarioCompleto.filter((himno) =>
    //   himno.frontmatter.title.includes(checkWord)
    // );
    // setHimnario(himnosFiltrados);
  };

  return (
    <Layout pageTitle="My Blog Posts">
      <Box className="hymns-list-with-favorites">
        {/*Search Bar  */}
        <StyledSearchBox>
          <Typography variant="h1" mb={2}> Buscar himno: </Typography>
          <SearchBar handleSearch={handleSearch} />
        </StyledSearchBox>

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

export const Head = () => <Seo title="Lista de himnos" />

export default HimnarioPage