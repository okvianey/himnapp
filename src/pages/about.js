import * as React from "react";
import {
  Box,
  Grid,
  Button,
  Divider,
  Typography
} from "@mui/material";
import Layout from "../components/layout";
import Seo from "../components/seo";

function About() {
  return (
    <Layout>
      <Box m={2}>
        <Typography variant="h1">¿Dudas o comentarios?</Typography>
        <Typography variant="h3" mx={2}>Escríbenos a: 
          <Button href="mailto:digitalgrowers@gmail.com" target="_blank">digitalgrowers@gmail.com</Button></Typography>
      </Box>  

      <Divider/>
      <Grid container>
        <Grid item m={2}>
          <Typography variant="h3">Conoce nuestra Iglesia: <br />
            <Button href="https://iglesiabautistacoatza.com" target="_blank">PIEB Coatza</Button></Typography>
        </Grid>
        <Grid item>

        </Grid>
        <Grid item m={2}>
          <Typography variant="h3">Creado por: <br />
            Digital Growers by
            <Button href="https://vianydev.github.io" target="_blank"> vianydev</Button></Typography>

        </Grid>
      </Grid>
    </Layout>
  )
}

export const Head = () => <Seo title="Sobre Nosotros" />;
export default About;