import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Typography
} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Layout from "../components/layout";
import Seo from "../components/seo";

function About() {
  
  return (
    <Layout>
      <Box>
        <Typography p={2} variant="h1">¿Dudas o comentarios?</Typography>

        <Card p={2}>
          <CardContent>
            <Typography variant="h3">Escríbenos a: <Button href="mailto:digitalgrowers@gmail.com" target="_blank">digitalgrowers@gmail.com</Button></Typography>
          </CardContent>
        </Card>

        <Divider />

        <Card p={2}>
          <CardContent>
            <Typography variant="h3">Nuestra Iglesia: <Button href="https://iglesiabautistacoatza.com" target="_blank">PIEB Coatza</Button></Typography>
          </CardContent>
        </Card>

        <Divider />

        <Card p={2}>
          <CardContent>
            <Typography variant="h3">Creado por: <Button href="https://vianydev.github.io" target="_blank">vianydev</Button></Typography>
          </CardContent>
        </Card>

      </Box>
      
    </Layout>
  )
}

export const Head = () => <Seo title="Sobre Nosotros" />;
export default About;