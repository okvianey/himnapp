import * as React from "react";

import { 
  Paper,
  Button,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Box,
  Typography,
} from "@mui/material";
import { UserContext } from "./context";


const SignIn = ({ setLogged, logged }) => {
  //Sign in and Sign up 
  const [ email, setEmail ] = React.useState("");
  const [ password, setPassword ] = React.useState("");

  const handleInput = (e) => {
    let { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  }

  const getUser = React.useContext(UserContext);


  //Login & Logout
  // React.useEffect(() => {
  //   const loggedUserJSON = localStorage.getItem("loggedUser");
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON);
  //     // setUser(user);
  //     // setIsLog(true);
  //     localStorage.setItem(
  //       "loggedUser", JSON.stringify(user)
  //     );
  //   }
  // }, []);
 


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          // const loggedUserJSON = localStorage.setItem("loggedUser", user);
          localStorage.setItem("loggedUser", JSON.stringify(user));
          localStorage.setItem("logged", logged);
          setLogged(true);
          getUser.loadUser(user);
        } else {
          console.log('something went wrong');
        }
      });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
      margin: '0 auto' }}>
      <Paper elevation={4}>
        <Typography component="h1" variant="h5" align="center" sx={{ mt: 5, }}>
          Ingresa a tu cuenta
        </Typography>
          
        <Box component="form" onSubmit={handleSubmit} noValidate
          sx={{
            m: '2rem 1rem',
          }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleInput}
            // autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInput}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignIn;
