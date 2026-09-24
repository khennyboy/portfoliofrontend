import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { Toaster } from "./components/ui/toaster.jsx";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </Box>
  );
}
