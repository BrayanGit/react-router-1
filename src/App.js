import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import './styles.css';

import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Planes from "./views/Planes";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Listado_planes" element={<Planes />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
