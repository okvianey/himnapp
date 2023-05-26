import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Typography } from "@mui/material"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <Typography variant="h1">Página no encontrada</Typography>
        <p style={paragraphStyles}>
          Lo sentimos 😔, no pudimos encontrar lo que estás buscando.
          <Link to="/"> Ir al inicio </Link>.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
