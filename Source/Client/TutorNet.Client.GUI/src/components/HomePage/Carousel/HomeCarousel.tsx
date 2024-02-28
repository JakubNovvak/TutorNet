import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SampleNextArrow, SamplePrevArrow} from "./ArrowElements";
import { Box, styled } from '@mui/material';
import CarouselCard from './CarouselCard';
import Image1 from "../../../assets/VisualTesting/image1.jpg";
import Image2 from "../../../assets/VisualTesting/image2.jpg";
import Image3 from "../../../assets/VisualTesting/image3.jpg";
import Image4 from "../../../assets/VisualTesting/image4.jpg";

const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4300,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

const Container = styled(Box)({
    paddingTop: "60px"
});

const CardContainer = styled(Box)({
    maxWidth: "1600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });

export default function HomeCarousel(){
    return(
        <Container>

            <Slider {...settings}>
                <CardContainer>
                    <CarouselCard imagePath={Image1} 
                    titleString="Do you feel best studying in your room?" 
                    descString="Our tutors are up to this task!" 
                    bottomString="Make home studying easy." />
                </CardContainer>

                <CardContainer>
                    <CarouselCard imagePath={Image2} 
                    titleString="Stressed out by your graduation exam?"
                    descString="Graduate from your school with class!"
                    bottomString="Choose tutor specializing in this area!"/>
                </CardContainer>

                <CardContainer>
                    <CarouselCard imagePath={Image3} 
                    titleString="Worried about the noise in your household?"
                    descString="Office lessons, or even meeting at the local bar."
                    bottomString="It's up to you!"/>
                </CardContainer>

                <CardContainer>
                    <CarouselCard imagePath={Image4} 
                    titleString="Study from the comfort of your own house!" 
                    descString="Group studying? Individual lessons? " 
                    bottomString="It's up to you!" />
                </CardContainer>
            </Slider>

        </Container>
    );
}