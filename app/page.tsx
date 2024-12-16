import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Services from './components/Servis/Services';
import Projects from './components/Project/Projects';
import Contact from './components/contact/Contact';
import HomePage from './components/home/HomePage'
import Footer from './components/footer/Footer';
import TopBar from './components/TopBar/TopBar'

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
