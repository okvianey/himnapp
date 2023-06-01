import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import SearchBar from "../components/searchBar";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
// import HymnsList from "../components/hymnsList";

const StyledSearchBox = styled("div")(({ theme }) => ({
  padding: 20,
  border: "1px dashed grey",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

// Page
const IndexPage = ({ data }) => {
  const himnarioCompleto = data.allMdx.nodes;
  const [himnario, setHimnario] = React.useState(data.allMdx.nodes);
  const [ input, setInput ] = React.useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }



  React.useEffect(() => {
    const handleSearch = () => {
      let inputToUpper = input.toUpperCase();
      let himnosFiltrados = himnarioCompleto.filter((himno) =>
        himno.frontmatter.title.includes(inputToUpper)
      );
      setHimnario(himnosFiltrados.length >= 1 ? himnosFiltrados : []);
    };

    handleSearch();
  }, [input])

  return (
  <Layout>
    <Box className="hymns-list-with-favorites">
      {/*Search Bar  */}
      <StyledSearchBox>
        <Typography variant="h1" mb={2}> Buscar himno: </Typography>
          <SearchBar handleSearch={handleInput} />
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
  );
};

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

export const Head = () => <Seo title="Himnario" />;
export default IndexPage;
