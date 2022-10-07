import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SearchBar from "../components/searchBar";

import { styled } from "@mui/material/styles";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {
  List,
  ListItem,
  ListItemButton,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

const StyledSearchBox = styled("div")(({ theme }) => ({
  padding: 20,
  border: "1px dashed grey",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const IndexPage = ({ data }) => {
  const himnarioCompleto = data.allMdx.nodes;
  const [himnario, setHimnario] = React.useState(data.allMdx.nodes);

  const handleSearch = (e) => {
    e.preventDefault();
    let checkWord = "" + e.target.value.toUpperCase();
    let himnosFiltrados = himnarioCompleto.filter((himno) =>
      himno.frontmatter.title.includes(checkWord)
    );
    setHimnario(himnosFiltrados);
  };

  // Favorites selection
  const [favorites, setFavorites] = React.useState([]);

  // React.useEffect(() => {
  //   window.localStorage.setItem('favorite-hymns', favorites)
  // }, [ favorites ]);

  //sort values added to the favoties array
  const sorting = (arr, node) => {
    if(arr.length > 0 ){
      for (let i = 0; i < arr.length; i++){
        if(node.frontmatter.order < arr[i].frontmatter.order){
          return arr.splice(i, 0, node);
        }
      }
    }
    arr.push(node);
  }

  // Function to check and and favorites hymns
  const handleToggle = (value) => () => {
    const currentIndex = favorites.indexOf(value);
    const newFavorite = [...favorites];

    if (currentIndex === -1) {
      // calling sorting function
      sorting(newFavorite, value);
    } else {
      newFavorite.splice(currentIndex, 1);
    }
    setFavorites(newFavorite);
  };

  const [ showFavorites, setShowFavorites ] = React.useState(false);

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  const handleShowIndex = () => {
    setShowFavorites(false);
  };

  return (
    <Layout handleShowFavorites={handleShowFavorites} handleShowIndex={handleShowIndex}>
      {showFavorites ? (
        <Box>
          
          <StyledSearchBox>
            <Typography variant="h1" mb={2}>
              Himnos favoritos
            </Typography>
            {/* <SearchBar handleSearch={handleSearch} /> */}
          </StyledSearchBox>
          <List sx={{ bgcolor: "background.paper", overflow: "auto" }}>
            {favorites.map((node) => {
              const labelId = `checkbox-list-secondary-label-${node.id}`;

              return (
                <ListItem
                  key={node.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleToggle(node)}
                      checked={favorites.indexOf(node) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                  divider
                >
                  <ListItemButton
                    color="inherit"
                    component={Link}
                    to={`/himno/${node.frontmatter.slug}`}
                  >
                    {node.frontmatter.title}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      ) : (
        <Box>
          <StyledSearchBox>
            <Typography variant="h1" mb={2}>
              Índice
            </Typography>
            <SearchBar handleSearch={handleSearch} />
          </StyledSearchBox>
          <List sx={{ bgcolor: "background.paper", overflow: "auto" }}>
            {himnario.map((node) => {
              const labelId = `checkbox-list-secondary-label-${node.id}`;

              if (node.frontmatter.slug === "0") {
                return <ListItem key={node.id}></ListItem>;
              } else {
                return (
                  <ListItem
                    key={node.id}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        onChange={handleToggle(node)}
                        checked={favorites.indexOf(node) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    }
                    disablePadding
                    divider
                  >
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
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___order, order: ASC }) {
      nodes {
        id
        frontmatter {
          order
          slug
          title
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Himnario" />;
export default IndexPage;
