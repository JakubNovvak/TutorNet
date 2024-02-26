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
                        image={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                        alt="Tutor's Photo"
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "21rem" }}>
                        <CardContent sx={{  display: 'flex', flexDirection: "column",  alignItems: "flex-start"}}>
                            <Typography component="div" variant="h5">
                                Jonh Smith
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Math Tutor
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography variant="h6">
                                {"I specialize in Matura Revision"}
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