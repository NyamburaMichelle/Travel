import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Layout from "./Layout";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Booknow from "./pages/Booknow";
import Nairobi from "./components/Nairobi";
import Kenya from "./components/Kenya";
import Madagascar from "./components/Madagascar";
import Morocco from "./components/Morocco";
import Namibia from "./components/Namibia";
import SA from "./components/SA";
import Uganda from "./components/Uganda";
import Zanzibar from "./components/Zanzibar";
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
            <Route path="/destinations/kenya" element={<Kenya />} />
            <Route path="/destinations/madagascar" element={<Madagascar />} />
            <Route path="/destinations/morocco" element={<Morocco />} />
            <Route path="/destinations/namibia" element={<Namibia />} />
            <Route path="/destinations/southafrica" element={<SA />} />
            <Route path="/destinations/uganda" element={<Uganda />} />
            <Route path="/destinations/zanzibar" element={<Zanzibar />} />
            <Route path="/services/service1" element={<Services1 />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App