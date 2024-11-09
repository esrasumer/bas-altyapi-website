import Navbar from '../app/components/Navbar';
import About from '../app/components/About';
import Projects from '../app/components/Projects';
import Contact from './components/contact/Contact';
import HomePage from './components/home/HomePage'
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
