import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import FormularioCategorias from "./components/categorias/formularioCategorias/FormularioCategorias";

import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import Navbar from "./components/navbar/Navbar";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategorias";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route
              path="/cadastroCategoria"
              element={<FormularioCategorias />}
            />
            <Route path="/deletarCategory/:id" element={<DeletarCategoria />} />
            <Route
              path="/editarCategory/:id"
              element={<FormularioCategorias />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
