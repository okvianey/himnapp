import React from "react";
import {
  Box,
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import WhatsApp from '@mui/icons-material/Whatsapp';
import Layout from "../components/layout";
import flatlatte from "../images/flatlatte.png";

function About() {

  const theme = useTheme();

  return (
    <Layout>
      <Grid container spacing={2} alignItems="center">
      {/* Tarjeta de contacto - WhatsApp */}
        <Grid item xs={12}>
          <Card 
            sx={{ 
              textAlign: "center",
              borderRadius: 3,
              overflow: 'visible',
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(99, 57, 204, 0.15)'}`,
                borderColor: theme.palette.primary.main,
              }
            }}
          >
            <CardActionArea 
              component="a" 
              href="https://wa.me/529223400366?text=%C2%A1Hola%21+Me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+Flat+Latte.&" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ p: 3 }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    margin: '0 auto 16px',
                    padding: 2,
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    // border: `2px solid ${theme.palette.primary.main}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 2,
                  }}
                >
                  <WhatsApp sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                
                <Typography variant="h5" component="div" fontWeight={600}>
                  ¿Necesitas ayuda?
                </Typography>
                 <Typography variant="body3" color="text.secondary">
                      Si ves un error o tienes alguna duda, envía un email a <Typography variant="overline">hola@flatlatte.com</Typography> o escríbenos por WhatsApp
                    </Typography>
               
                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    color: 'text.secondary'
                  }}
                >
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Tarjeta principal - Hecho con café y código */}
        <Grid item xs={12}>
          <Card 
            sx={{ 
              textAlign: "center",
              borderRadius: 3,
              overflow: 'visible',
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(99, 57, 204, 0.15)'}`,
                borderColor: theme.palette.primary.main,
              }
            }}
          >
            <CardActionArea 
              component="a" 
              href="https://flatlatte.com/okvianey" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ p: 3 }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    margin: '0 auto 16px',
                    padding: 2,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    border: `2px solid ${theme.palette.neutral.main}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // boxShadow: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: 40,
                      height: 40,
                      objectFit: 'contain'
                    }}
                    image={flatlatte}
                    alt="flatlatte logo"
                  />
                </Box>
                
                <Typography 
                  variant="h6" 
                  component="h2"
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                  }}
                >
                  Hecho con café y código
                </Typography>
                
                <Typography 
                  variant="body" 
                  color="text.secondary"
                  sx={{ 
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1
                  }}
                >
                  por <Box component="span" sx={{ color: 'neutral.main', fontWeight: 600 }}>@okvianey</Box>
                </Typography>
                
                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    color: 'text.secondary'
                  }}
                >
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
       
      </Grid>

    </Layout>
  )
}

// export const Head = () => <Seo title="Sobre Nosotros" />;
export default About;