import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import CoinbaseFull from "./pages/CoinbaseFull";
import Home from "./pages/Home";
import IbmFull from "./pages/IbmFull";
import Private from "./pages/Private";
import Usda from "./pages/Usda";
import { Coinbase, Hanhwa, IBM } from "./pages/Work";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="route-fade">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/coinbase-2025-summer" element={<Coinbase />} />
        <Route path="/portfolio/ibm-2024-summer" element={<IBM />} />
        <Route path="/portfolio/hanhwa-investment" element={<Hanhwa />} />
        <Route path="/portfolio/usda" element={<Usda />} />
        <Route
          path="/coinbase"
          element={
            <Private>
              <CoinbaseFull />
            </Private>
          }
        />
        <Route
          path="/ibm"
          element={
            <Private>
              <IbmFull />
            </Private>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
