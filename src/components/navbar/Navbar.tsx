import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-red-700 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Farmacia do Bem</div>

          <div className="flex gap-3 cursor-pointer">
            <Link
              to="/home"
              className="hover:bg-gray-200 hover:text-red-800 py-1 px-4 rounded duration-300"
            >
              Home
            </Link>
            <Link
              to="/categorias"
              className="hover:bg-gray-200 hover:text-red-800 py-1 px-4 rounded  duration-300"
            >
              Categorias
            </Link>
            <Link
              to="/cadastroCategoria"
              className="hover:bg-gray-200 hover:text-red-800 py-1 px-4 rounded duration-300"
            >
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
