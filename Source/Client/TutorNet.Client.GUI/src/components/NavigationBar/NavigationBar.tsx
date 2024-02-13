import { Toolbar, Box, AppBar, styled } from '@mui/material';
import reactLogo from './assets/react.svg';
import TutorNetLogo from '../../assets/TutorNetLogo.png';

const AnimatedImage = styled("img")({
    transition: 'all 0.3 ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)'
    }
});

const navColor = "#201c1c";

export default function NavigationBar(){
    return (
        <>
            <Box sx={{flex: 1}}>
                <AppBar sx={{ background: navColor}} position="static">
                    <Toolbar sx={{ marginTop: "5px", marginBottom: "5px"}}>
                        <AnimatedImage src={TutorNetLogo} style={{height: "45px"}}></AnimatedImage>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}