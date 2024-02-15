import { LocalPhone } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function PhoneCallContent()
{
    return(
        <Card elevation={10} sx={{display: 'flex', backgroundColor: "#4bb7f8"}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: "500px"}}>
                <CardContent sx={{ flex: '1 0 auto', display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    
                    <Typography component="div" variant="h4" fontWeight="bold" sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <LocalPhone sx={{marginRight: "10px"}} fontSize="large"/> Phone Call
                    </Typography>

                    <Typography component="div" variant='h5' sx={{marginTop: "20px"}}>
                        <Typography fontWeight="bold">Monday-Friday</Typography> 10:00 am - 4:00 pm
                    </Typography>

                    <Typography fontWeight="bold" sx={{marginTop: "20px"}}>
                        Language: English
                    </Typography>

                    <Typography component="div" variant='h5'>
                        +48 123 456 789
                    </Typography>

                </CardContent>
            </Box>
        </Card>
    );
}