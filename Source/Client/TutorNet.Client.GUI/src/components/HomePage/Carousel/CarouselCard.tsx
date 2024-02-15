import { Box, Card, CardMedia, CardContent, Typography, styled } from '@mui/material';
import { red } from '@mui/material/colors';

export default function CarouselCard({ imagePath }: {imagePath? : string})
{
    return(
        <Box height={650} width="100%" display="flex" alignItems="center" justifyContent="center" /*sx={{bgcolor: "gray"}}*/ gap={30}>
            <Card sx={{display: 'flex'}} elevation={10}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "550px" }}>
                    <CardContent sx={{ flex: '1 0 auto', display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "100px" }}>
                        <Typography component="div" variant="h4" fontWeight="bold" sx={{marginTop: "80px"}}>
                            Study from the comfort of your own house!
                        </Typography>
                        <Typography component="div" variant='h5' sx={{marginTop: "20px"}}>
                            Group studying? Individual lessons? 
                        </Typography>
                        <Typography sx={{marginTop: "80px"}} variant='h5' fontWeight="bold">
                            It's up to you!
                        </Typography>
                    </CardContent>
                </Box>

                <CardMedia
                component="img"
                sx={{ width: '1000px', height: '600px'}}
                image={imagePath}
                alt="Live from space album cover"
                />

            </Card>
        </Box>    
    );
}