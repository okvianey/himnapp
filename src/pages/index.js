import * as React from "react";
import { Link } from "gatsby";
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
import hymnsList from "../assets/hymnsList.json";

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

const IndexPage = () => {

  const himnarioCompleto = hymnsList;
  const [ himnario, setHimnario ] = React.useState([]);
  const [ input, setInput ] = React.useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  

  React.useEffect(() => {
    const handleSearch = () => {
      let inputToUpper = input.toUpperCase();
      
      if (inputToUpper.length > 0) {
        let himnosFiltrados =
        himnarioCompleto.filter((himno) =>
          himno.frontmatter.title.includes(inputToUpper)
          );
        setHimnario(himnosFiltrados);
      } else {
        setHimnario(hymnsList);
      }
    };

    handleSearch();
  }, [ input, himnarioCompleto ])

  return (
  <Layout>
    <Box>
      <StyledSearchBox>
        <Typography variant="h1" mb={2}> Buscar himno: </Typography>
        <SearchBar handleSearch={handleInput} />
      </StyledSearchBox>
        
      <List sx={{ bgcolor: "background.paper", overflow: "auto" }}>
        {
          himnario.length > 0 ?
            
            himnario.map((node) => {
              const keyId = node.id;

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
            }) :
            <p></p>
          }
      </List>

    </Box>
  </Layout>
  );
};

export const Head = () => <Seo title="Himnario" />;
export default IndexPage;
