import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from "../components/seo";

import {
  Paper
} from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';


const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleInput = (e) => {
    let inputName = e.target.name;
    console.log("🚀 ~ file: signup.js ~ line 33 ~ handleInput ~ inputName", inputName)

    inputName === "name" ?
      setName(e.target.value) :
      inputName === "email" ?
      setEmail(e.target.value) :
      setPassword(e.target.value);
  }

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '500px',
      margin: '0 auto' }}>
        <Paper elevation={4}>
          <Typography component="h1" variant="h5" align="center" sx={{ mt: 5, }}>
            Crear una cuenta
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate
            sx={{
              m: '2rem 1rem',
            }}>
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
            <Grid container alignItems={'center'} mt={2}>
              <Grid item>
                <Button component={Link} to={'/signin'} size="small" variant="text" >
                  ¿Ya tienes una cuenta?
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Layout>
      
  )
}

export const Head = () => <Seo title="Crear cuenta" />
export default SignUp;
