import {Box, Button} from '@mui/material';
import { Link } from 'react-router-dom';

export default function RegistrationComponents(){
    return (
        <>
            <Box marginLeft="auto">
                <Link to="/onlinereservation" style={{color: 'inherit', textDecoration: 'none'}}>
                    <Button variant='outlined' style={{color: "white", borderColor: "#4bb7f8"}}>Online Reservation</Button>
                </Link>
                <Button variant='outlined' style={{marginLeft: '20px', color: "white", borderColor: "#a3a3a3"}} >Call Us</Button>
            </Box>
        </>
    );
}