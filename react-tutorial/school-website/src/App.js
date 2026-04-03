import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import MyComponent from "./MyComponent";
import About from "./components/about";
import Services from "./components/services";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

