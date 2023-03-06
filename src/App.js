
import Contact from "./Components/Contact/contact";
import Footer from "./Components/footer/footer";
import Menubar from "./Components/header/menubar";
import Navbar from "./Components/header/navbar";
import Home from "./Components/home/home";
import Projects from "./Components/projects/projects";
// import Services from "./Components/services/services";
import Skills from "./Components/skills/skills";
// import Testimonial from "./Components/testimonial/testimonial";



function App() {



  return (
    <div className="App">
      <Menubar />
      <Navbar />
      <Home />
      <Skills />
      {/* <Services /> */}
      <Projects />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}



export default App;
