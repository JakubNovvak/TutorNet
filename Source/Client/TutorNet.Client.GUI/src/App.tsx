//import { useState } from 'react'
//import * as React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import ReservationPage from "./pages/Reservation/ReservationPage";
import FinalizeReservationPage from "./pages/FinalizeReservation/FinalizeReservationPage";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavigationBar/>
        <Box
          sx={{
            minHeight: "calc(100vh - 235px)",
            //minHeight: "100vh",
            //backgroundColor: "#e8e8e8",
            backgroundColor: "white"
          }}
        >
          <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/onlinereservation" Component={ReservationPage}/>
          </Routes>
        </Box>
        {/* <Box height={150} bgcolor="white"></Box> */}
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
