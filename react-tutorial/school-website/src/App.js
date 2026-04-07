import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Course from "./components/Course";
export default function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/courses" element={<Course />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

