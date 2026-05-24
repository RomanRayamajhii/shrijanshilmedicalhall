import About from "../components/home/about";
import Contact from "../components/home/contact";
import Doctors from "../components/home/doctor";
import Footer from "../components/home/footer";
import Hero from "../components/home/hero";
import Navbar from "../components/home/navbar";
import Services from "../components/home/services";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Contact />
      <Footer />
    </main>
  );
}