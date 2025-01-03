import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Layout from "./Layout";
import About from "./pages/About";


function App() {


  return (
    <>
      
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} > 
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<About />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
