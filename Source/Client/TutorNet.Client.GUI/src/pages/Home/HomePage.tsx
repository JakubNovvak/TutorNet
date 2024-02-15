import HomeCarousel from "../../components/HomePage/Carousel/HomeCarousel";
import Support from "../../components/HomePage/Support/Support";
import HomePageSectionsSeparator from "../../components/HomePage/HomePageSectionsSeparator";

export default function HomePage(){
    return(
        <>
            <HomeCarousel />
            <HomePageSectionsSeparator/>
            <Support />
        </>
    );
}