import { Box, Card, CardContent, CardMedia, Divider, Paper, Typography } from "@mui/material";
import TutorTabsInfo from "./TutorTabsInfo";

export default function TutorProfile()
{
    return(
        <Box sx={{ display: "flex", backgroundColor: "none"}}>
            <Paper elevation={2} sx={{minHeight: "30rem", maxHeight: "10rem", minWidth: "32rem"}}>
                <Card sx={{display: 'flex'}} elevation={2}>

                    <CardMedia
                        component="img"
                        sx={{ width: '9rem', height: '9rem', borderRadius: "10%", objectFit: "cover", padding: "0.5rem" }}
                        image={"https://s3-eu-west-1.amazonaws.com/znanylekarz.pl/doctor/b9ca2f/b9ca2f224d5cfb90288bc96a28a6295b_large.jpg"}
                        alt="Tutor's Photo"
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{  display: 'flex', flexDirection: "column",  alignItems: "flex-start"}}>
                            <Typography component="div" variant="h5">
                                Jan Kowalski
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Korepetytor matematyki
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography variant="h5">
                                {"<Placeholder>"}
                            </Typography>
                        </Box>
                    </Box>
                </Card>

                <Divider />

                <TutorTabsInfo/>

            </Paper>
        </Box>
    );
}