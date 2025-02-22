import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HomeSection from "./components/home/HomeSection";
import Navigation from "./components/home/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        {/* <Route path="/catalog" element={<Catalog />} />
        <Route path="/create" element={<CreateDestination />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}
