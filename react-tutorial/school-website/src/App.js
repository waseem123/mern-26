import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Course from "./components/Course";
import Courses from "./components/Courses";
import Students from "./components/Students";
import StudentDetails from "./components/StudentDetails";
import StateDemo from "./components/StateDemo";
export default function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/students/:rollno" element={<StudentDetails />}></Route>
          <Route path="/states" element={<StateDemo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

