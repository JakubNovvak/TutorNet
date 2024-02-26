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
    <h1 style={{position: "fixed", marginLeft: "40vw", opacity: "0.5", color: "#918e8e", zIndex: "20"}}>This is only a Demo view</h1>
      <BrowserRouter>
      <NavigationBar/>
        <Box
          sx={{
            minHeight: "calc(100vh - 50rem)",
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
