import CardsSection from "@/components/cardssection";
import CustomCarousel from "@/components/carousel";
import { CarouselSize } from "@/components/carouselcardtwo";
import Categories from "@/components/categories";
import Header from "@/components/header";
import HeroSection from "@/components/herosection";
import NavigationBar from "@/components/navigationbar";
import NewMedicines from "@/components/newmedicines";

export default function Home() {
  return (
    <>
      <Header/>
      <NavigationBar/>
      <CustomCarousel/>
      <CardsSection/>
      <CarouselSize/>
      <Categories/>
      <NewMedicines/>
      <HeroSection/>
    </>
  );
}
