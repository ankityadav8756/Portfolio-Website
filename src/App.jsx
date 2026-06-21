import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Achievements from './Achievements';
import Education from './Education';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Added some IDs to ensure the Navbar links scroll to the right places */}
      <div id="skills">
         <Achievements />
      </div>
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;