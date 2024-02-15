import {Box, Button} from '@mui/material';
//import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function RegistrationComponents(){
    return (
        <>
            <Box marginLeft="auto">
                <Button variant='outlined' style={{color: "white", borderColor: "#4bb7f8"}}>Online Registration</Button>
                <Button variant='outlined' style={{marginLeft: '20px', color: "white", borderColor: "#a3a3a3"}} >Call Us</Button>
            </Box>
        </>
    );
}