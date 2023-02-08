"use client"
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Carousel from "./components/Carousel";



export default function Home() {
  return (
    <>
    <Carousel />
    <HeroSection />
    <Features />
    <Testimonials />
    
    </>
  )
}
