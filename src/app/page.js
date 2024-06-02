"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import AboutMe from "./components/AboutMe/AboutMe";
import Testimonial from "./components/Testimonial/Testimonial";
import RecenctWorks from "./components/Infomation/RecenctWorks";


export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <RecenctWorks />
      <AboutMe />
      <Testimonial />
    </main>
  );
}
