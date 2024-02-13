//import { useState } from 'react'
//import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          minHeight: "calc(100vh - 235px)",
          backgroundColor: "white",
          height: "100%"
        }}
      >

        {/* TODO: Here will be the rest od the content */}

      </Box>
      <Footer />
    </>
  )
}

export default App
