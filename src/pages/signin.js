import * as React from "react";
import { Link } from 'gatsby';
import Seo from "../components/seo";
import Layout from "../components/layout";

import { 
  Paper,
  Button,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Box,
  Grid,
  Typography,
 } from "@mui/material";


const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '500px',
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
            <Grid container alignItems={'center'} mt={2} sx={{ flexDirection: { xs: 'column ', md: 'row' }, }}>
              {/* <Grid item xs py={'10px'}>
                <Button component={Link} to={'/'} size="small" variant="text" >
                  ¿Olvidaste tu contraseña?
                </Button>
              </Grid> */}
              <Grid item>
                <Button component={Link} to={'/signup'} size="small" variant="text" >
                  ¿Aún no tienes una cuenta?
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Layout>
  )
}

export const Head = () => <Seo title="Iniciar sesión" />
export default SignIn;
