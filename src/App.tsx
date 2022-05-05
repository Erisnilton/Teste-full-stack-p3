import * as React from "react"
import './styles.css'
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import Main from "./components/main/Main"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
       <Main/> 
      </Grid>
     </Box>
  </ChakraProvider>
)
