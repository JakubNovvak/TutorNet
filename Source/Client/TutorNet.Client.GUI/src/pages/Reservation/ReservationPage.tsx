import { Box, Grid, Typography, styled } from "@mui/material";
import ReservationTime from "../../components/ReservationPage/Reservation/ReservationTime";
import TutorProfile from "../../components/ReservationPage/Tutor/TutorProfile";
import LessonsTabs from "../../components/ReservationPage/Reservation/LessonsTabs";

const SectionsContainer = styled(Box)({
    backgroundColor: "gray", 
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
});

export default function ReservationPage()
{
    return(
        <SectionsContainer>
            <Grid container spacing={0} justifyContent="center" sx={{backgroundColor: "#edeff2", pt: "1.7rem"}}>
                <Grid item xs={4} sx={{display: "flex", justifyContent: "center", width: "100%", backgroundColor: "none"}}>
                    <TutorProfile />
                </Grid>

                <Grid item xs={4} sx={{backgroundColor: "none"}}>
                    <LessonsTabs/>
                </Grid>
            </Grid>
        </SectionsContainer>
    );
}