import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomeSection from "./components/home/HomeSection";
import Catalog from "./components/catalog/Catalog";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CreateDestination from "./components/create/Create";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/create" element={<CreateDestination />} />
        <Route path="/about" element={<About />} />
        // TODO make not found route and component
      </Routes>
      <Footer />
    </>
  )
}
