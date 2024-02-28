import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";


interface CardCategoriasProps {
  categoria: Categoria;
}

function CardTemas({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-red-600 text-yellow-400 uppercase text-2xl">
        {categoria.nome}
      </header>

      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.descricao}</p>
      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-red-600 bg-gray-200 hover:bg-sky-300 hover:text-white flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-slate-100 bg-red-600 hover:font-bold w-full flex items-center justify-center py-2"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
