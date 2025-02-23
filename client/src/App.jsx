import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HomeSection from "./components/home/HomeSection";
import Navigation from "./components/home/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateDestination from "./components/create/Create";
export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        {/* <Route path="/catalog" element={<Catalog />} /> /> */}     
        <Route path="/auth/register" element={<Register />} />  
        <Route path="/auth/login" element={<Login />} />
        <Route path="/create" element={<CreateDestination />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}
