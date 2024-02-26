import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import ReservationPage from "./pages/Reservation/ReservationPage";
import FinalizeReservationPage from "./pages/FinalizeReservation/FinalizeReservationPage";

function App() {
  
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
            <Route path="/onlinereservation/finalize" Component={FinalizeReservationPage}/>
          </Routes>
        </Box>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
