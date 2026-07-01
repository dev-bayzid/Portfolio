import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Journey from "@/sections/Journey";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Footer from "@/components/Footer";
import Education from "@/sections/Education";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress></ScrollProgress>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Journey></Journey>
        <Education></Education>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
