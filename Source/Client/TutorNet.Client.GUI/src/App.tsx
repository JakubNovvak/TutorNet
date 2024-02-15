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
          minHeight: "calc(100vh - 235px)",
          backgroundColor: "#e8e8e8",
          height: "100%"
        }}
      >

        {/* TODO: Here will be the rest od the content */}
        <HomePage />
      </Box>
      <Footer />
    </>
  )
}

export default App
