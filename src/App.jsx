import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Private from "./pages/Private";
import Usda from "./pages/Usda";
import { Coinbase, Hanhwa, IBM } from "./pages/Work";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/coinbase-2025-summer" element={<Coinbase />} />
        <Route path="/portfolio/ibm-2024-summer" element={<IBM />} />
        <Route path="/portfolio/hanhwa-investment" element={<Hanhwa />} />
        <Route path="/portfolio/usda" element={<Usda />} />
        <Route path="/coinbase" element={<Private />} />
        <Route path="/ibm" element={<Private />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
