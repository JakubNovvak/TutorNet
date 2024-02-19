import React from 'react';
import { Toolbar, Box, AppBar, Typography } from '@mui/material';
import {motion, AnimatePresence, MotionProps } from "framer-motion";
import TutorNetLogo from '../../assets/TutorNetLogo.png';
import RegistrationComponents from './RegistrationComponents';
import { Link } from 'react-router-dom';

const navColor = "#201c1c";

const AnimatedLogo = React.forwardRef<HTMLImageElement, MotionProps>((props, ref) => (
    <motion.div
        ref={ref}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2 }}
        //src={TutorNetLogo}
        //alt="TutorNetLogo"
        //style={{height: "40px"}}
        style={{display: "flex", flexDirection: "row"}}
        {...props}
    />
));

export default function NavigationBar(){
    return (
        <>
            <Box sx={{flex: 1}}>
                <AppBar sx={{ background: navColor}} position="static">
                    <Toolbar sx={{ marginTop: "5px", marginBottom: "5px"}}>
                        <AnimatePresence>
                            <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                            <AnimatedLogo>
                                <img src={TutorNetLogo} style={{height: "40px"}}/>
                                <Typography variant='h5' fontWeight="bold" sx={{marginLeft: "10px", marginTop: "5px"}}>
                                    TutorNet
                                </Typography>
                            </AnimatedLogo>
                            </Link>
                            <RegistrationComponents />
                        </AnimatePresence>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}