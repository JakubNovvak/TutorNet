import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SampleNextArrow, SamplePrevArrow} from "./ArrowElements";
import { styled } from '@mui/material';

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

const Container = styled("div")({
    minHeight: "580px"
  });

export default function HomeCarousel(){
    return(
        <Container>
            <Slider {...settings}>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
            </Slider>
        </Container>
    );
}