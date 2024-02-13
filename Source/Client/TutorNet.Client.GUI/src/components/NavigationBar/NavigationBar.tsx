import React from 'react';
import { Toolbar, Box, AppBar, styled } from '@mui/material';
import {motion, AnimatePresence, MotionProps } from "framer-motion";
import TutorNetLogo from '../../assets/TutorNetLogo.png';

const navColor = "#201c1c";

const AnimatedLogo = React.forwardRef<HTMLImageElement, MotionProps>((props, ref) => (
    <motion.img
        ref={ref}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        src={TutorNetLogo}
        alt="TutorNetLogo"
        style={{height: "40px"}}
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
                            <AnimatedLogo />
                        </AnimatePresence>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}