import {
  Loader,
  NavBar,
  Sidebar,
  Hero,
  About,
  TechStack,
  Projects,
  Testimonials,
  Footer,
  Contact,
} from "./sections";
import { LoadingProvider } from "./context/LoadingContext";

const App = () => {
  return (
    <LoadingProvider>
    <div className="bg-black-100">
      <Loader />
      <NavBar />
      <Sidebar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    </LoadingProvider>
  );
};

export default App;
