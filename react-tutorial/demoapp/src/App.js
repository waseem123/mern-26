import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Services from "./Services";

export default function App() {
  return (
    <>

      <h1>This is my React App</h1>
      <h3>We are revising the React Framework</h3>
      <hr></hr>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </BrowserRouter>
    </>


  );
}

