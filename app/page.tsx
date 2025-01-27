import AccordionSection from "@/components/accordionsection";
import CardsSection from "@/components/cardssection";
import CustomCarousel from "@/components/carousel";
import { CarouselSize } from "@/components/carouselcardtwo";
import Categories from "@/components/categories";
import Header from "@/components/header";
import HeroSection from "@/components/herosection";
import HeroSectionTwo from "@/components/herosectiontwo";
import NavigationBar from "@/components/navigationbar";
import NewMedicines from "@/components/newmedicines";
import NewsletterSignup from "@/components/newsletter";
import RecentUpdates from "@/components/recentupdate";

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
      <HeroSectionTwo/>
      <AccordionSection/>
      <RecentUpdates/>
      <NewsletterSignup/>
    </>
  );
}
