import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className='dark:bg-zinc-800 '>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
