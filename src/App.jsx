import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Beaches from "./pages/Beaches";
import Mountains from "./pages/Mountains";
import City from "./pages/City";
import Adventure from "./pages/Adventure";
import Search from "./pages/Search";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/beaches" element={<Beaches />} />
      <Route path="/mountains" element={<Mountains />} />
      <Route path="/city" element={<City />} />
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;