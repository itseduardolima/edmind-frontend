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
      <Services />
      <About />
      <WhyChooseUs />
      <Portfolio />
    </div>
  );
}

export default App;
