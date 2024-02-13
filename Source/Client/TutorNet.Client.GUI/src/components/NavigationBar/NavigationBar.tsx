import { Toolbar, Box, AppBar } from '@mui/material';
import reactLogo from './assets/react.svg';

const navColor = "#201c1c";

export default function NavigationBar(){
    return (
        <>
            <Box sx={{flex: 1}}>
                <AppBar sx={{ background: navColor}} position="static">
                    <Toolbar sx={{ marginTop: "5px", marginBottom: "5px"}}>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}