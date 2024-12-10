import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Contact from './components/contact/Contact';
import HomePage from './components/home/HomePage'
import Footer from './components/footer/Footer';
import HeadPage from './components/Head/HeadPage'
import TopBar from './components/TopBar/TopBar'

export default function Home() {
  return (
    <div>
      <TopBar />
      <HeadPage />
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
