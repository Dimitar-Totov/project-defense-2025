import { Routes, Route } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import HomeSection from "./components/home/HomeSection";
import Catalog from "./components/catalog/Catalog";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreateDestination from "./components/create/Create";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
