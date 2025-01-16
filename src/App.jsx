import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Layout from "./Layout";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Booknow from "./pages/Booknow";
import Nairobi from "./components/Nairobi";
import Services1 from "./components/Services1";
import Contact from "./pages/Contact";


function App() {


  return (
    <>
      
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} > 
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/booknow" element={<Booknow />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations/nairobi" element={<Nairobi />} />
            <Route path="/services/service1" element={<Services1 />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App