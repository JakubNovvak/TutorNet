import { Box, Typography, styled } from "@mui/material";
import PhoneCallContent from "./PhoneCallContent";
import EmailContent from "./EmailContent";

const CardBox = styled(Box)({
    height: 300, 
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

export default function Support(){
    return(
        <>
            <Typography component="div" variant="h4" color="black" fontWeight="bold" sx={{padding: "10px", paddingTop: "50px"}}>
                Have any Questions?
            </Typography>
            <Typography component="div" variant="h5" color="black" fontWeight="normal">
                Feel free to contact us - we will answer ALL of them!
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: "20vw", marginRight:"20vw", justifyContent: "bottom"}}>
            
                <CardBox>
                    <PhoneCallContent/>
                </CardBox> 

                <CardBox>
                    <EmailContent />
                </CardBox>

            </Box> 
        
        </>
    );
}