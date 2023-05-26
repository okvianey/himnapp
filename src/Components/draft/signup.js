import * as React from "react";

import {
  Paper,
  Button,
  TextField,
  Box,
  Typography
} from "@mui/material";

const SignUp = ({ buttonVariant, buttonText }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleInput = (e) => {
    let { name, value } = e.target;

    name === "name" ? setName(value) :
      name === "email" ? setEmail(value) :
        setPassword(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = new FormData(e.currentTarget);
    console.log("🚀 ~ file: signup.js ~ line 36 ~ handleSubmit ~ user", user)
    console.log(name, email, password);
    
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
      <Paper elevation={4}>
        <Typography component="h1" variant="h5" align="center" sx={{ mt: 5, }}>
          Crear una cuenta
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: '2rem 1rem' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoComplete="name"
            onChange={handleInput}
            // autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            // autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Crear
          </Button>
        </Box>
      </Paper>
    </Box>   
  )
}

export default SignUp;
