import FeaturedCourses from "@/Components/FeaturedCourses";
import HeroSection from "@/Components/HeroSection";
import TestimonialCards from "@/Components/TestimonialCards";
import WhyChooseUs from "../Components/WhyChooseUs";
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import Instructors from "@/Components/Instructors";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">


        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
      </main>
    </>
  );
}
