import homeLogo from "../../assets/home.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-red-700 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold text-yellow-300">
              Bem vindo a Farmácia Do Bem!
            </h2>
            <p className="text-xl">Sua melhor amiga, com os melhores preços!</p>

            <div className="flex justify-around gap-4">
              <button className=" bg-white text-red-800 hover:bg-yellow-300 hover:text-black rounded duration-300 py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-2/3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
