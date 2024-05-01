import './App.css';
import HeroSection from './sections/HeroSection';
import About from './sections/About';
import Testimonial from './sections/Testimonial';
import Banner from './sections/Banner';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <About />
      <Testimonial />
      <Banner />
    </div>
  );
}

export default App;
