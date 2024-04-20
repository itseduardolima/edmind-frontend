import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services id="services" />
      <About id="about" />
      <WhyChooseUs />
      <Portfolio id="portfolio" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
