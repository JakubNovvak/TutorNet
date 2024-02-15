import { Email } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function PhoneCallContent()
{
    return(
        <Card elevation={10} sx={{display: 'flex',  borderStyle: "solid", borderWidth: "2px", borderColor: "#4bb7f8"}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: "500px" }}>
                <CardContent sx={{ flex: '1 0 auto', display: "flex", flexDirection: "column", justifyContent: "center" }}>

                    <Typography component="div" variant="h4" fontWeight="bold" sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <Email sx={{marginRight: "10px"}} fontSize="large" /> E-mail
                    </Typography>

                    <Typography component="div" variant='h5' sx={{marginTop: "20px"}}>
                        <Typography fontWeight="bold">Monday-Sunday</Typography> 24h / 7
                    </Typography>

                    <Typography fontWeight="bold" sx={{marginTop: "20px"}}>
                        Language: English
                    </Typography>

                    <Typography component="div" variant='h5'>
                        support@tutornet.com
                    </Typography>

                </CardContent>
            </Box>
        </Card>
    );
}