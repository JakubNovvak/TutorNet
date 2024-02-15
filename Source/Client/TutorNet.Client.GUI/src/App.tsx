//import { useState } from 'react'
//import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          //minHeight: "calc(100vh - 235px)",
          minHeight: "calc(100vh)",
          //backgroundColor: "#e8e8e8",
          backgroundColor: "white",
          height: "100%"
        }}
      >
        {/* TODO: Here will be the rest od the content */}
        <HomePage />
      </Box>
      {/* {TODO: Proper implementation fo that spacing below} */}
      <Box height={150} bgcolor="white"></Box>
      <Footer />
    </>
  )
}

export default App
