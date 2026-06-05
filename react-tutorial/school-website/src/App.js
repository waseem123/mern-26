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
import Parent from "./components/Parent";
import Child from "./components/Child";
import Master from "./components/Master";
import Slave from "./components/Slave";
import ProductsPage from "./components/ProductsPage";
import TodParent from "./components/TodoParent";
import PropDrillingDemo from "./components/PropDrillingDemo";
import ContextComponent from "./components/ContextComponent";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import UseEffectDemo from "./components/UseEffectDemo";
import Test from "./components/Test";
import AutoSaveTest from "./components/AutoSaveTest";
import FetchDemo from "./components/FetchDemo";
export default function App() {
  const [currentTheme, updateCurrentTheme] = useState("light")
  const setCurrentTheme = (theme) => {
    updateCurrentTheme(theme)
  }
  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={currentTheme}>
          <Navbar updateTheme={setCurrentTheme} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/students" element={<Students />}></Route>
            <Route path="/students/:rollno" element={<StudentDetails />}></Route>
            <Route path="/states" element={<StateDemo />}></Route>
            <Route path="/parent" element={<Parent />}></Route>
            <Route path="/child" element={<Child />}></Route>
            <Route path="/master" element={<Master />}></Route>
            <Route path="/slave" element={<Slave />}></Route>
            <Route path="/products" element={<ProductsPage currentTheme="light" />}></Route>
            <Route path="/task-manager" element={<TodParent />}></Route>
            <Route path="/prop-drilling" element={<PropDrillingDemo />}></Route>
            <Route path="/context-component" element={<ContextComponent />}></Route>
            <Route path="/use-effect-demo" element={<UseEffectDemo />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/auto-save" element={<AutoSaveTest />}></Route>
            <Route path="/fetch-demo" element={<FetchDemo />}></Route>
          </Routes>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>

    </>
  );
}

