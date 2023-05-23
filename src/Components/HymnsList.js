import * as React from "react";
import { Link } from "gatsby";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { List, ListItem, ListItemButton, Checkbox } from "@mui/material";
import { LoggedContext } from "../components/context";


export default function HymnsList({ listName }) {
  //Sign in and Sign up
  const loggedStorage = window.localStorage.getItem("logged");
  const logStatus = React.useContext(LoggedContext);

  const defaultUser = {
    id: "",
    name: "",
    email: "",
    joined: "",
    favorites: [],
  };

  const userStorage = JSON.parse(window.localStorage.getItem("loggedUser"));
  const [user, setUser] = React.useState(userStorage);
  const [favoritesId, setFavoritesId] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    if (logStatus.logged) {
      fetch(`http://localhost:3000/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: userStorage.id,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            setUser(user);
            setFavoritesId(user.favorites.sort());
          }
        });
    } else {
      setUser(defaultUser);
    }
  }, []);

  const handleChangeFavorites = (value) => () => {
    let currentIndex = favoritesId.indexOf(value.frontmatter.order);

    if (currentIndex === -1) {
      fetch("http://localhost:3000/addFavorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          addFavFrontmatterOrder: value.frontmatter.order,
        }),
      })
        .then((response) => response.json())
        .then((fav) => {
          if (fav) {
            setFavoritesId(fav.favorites.sort());
          }
        });
    } else {
      fetch("http://localhost:3000/addFavorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          removeFavFrontmatterOrder: value.frontmatter.order,
        }),
      })
        .then((response) => response.json())
        .then((fav) => {
          if (fav) {
            setFavoritesId(fav.favorites);
          }
        });
    }
  };

  const handleToggleFavorites = (value) => () => {
    const currentIndex = favorites.indexOf(value);
    const newFavorite = [...favorites];

    if (currentIndex === -1) {
      newFavorite.push(value);
    } else {
      newFavorite.splice(currentIndex, 1);
    }
    setFavorites(newFavorite);
  };

  return (
    <List sx={{ bgcolor: "background.paper", overflow: "auto" }}>
      {listName.map((node) => {
        const labelId = `checkbox-list-label-${node.id}`;

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
                  onClick={handleToggleFavorites}
                  onChange={handleChangeFavorites(node)}
                  checked={favoritesId.indexOf(node.frontmatter.order) !== -1}
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
  );
}