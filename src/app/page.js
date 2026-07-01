import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Journey";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Testimonial from "@/sections/Education";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </main>
      <Footer></Footer>

    </div>
  );
}
