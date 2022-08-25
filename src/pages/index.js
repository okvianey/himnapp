import React from "react"
import { ThemeProvider } from "@mui/material/styles";
import theme from "../style/theme";
import NavTop from "../Components/NavTop";
import HymnsList from "../Components/HymnsList";


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme} >
        <NavTop />
        <HymnsList />
    </ThemeProvider>
      
  )
    
}

export default IndexPage

export const Head = () => <title>Home Page</title>
