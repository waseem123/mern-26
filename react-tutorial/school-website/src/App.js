import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import MyComponent from "./MyComponent";
import About from "./components/about";
import Services from "./components/services";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">

        <Home />
        <About />
        <Services/>

      </div>

      <Footer />
    </>
  );
}

