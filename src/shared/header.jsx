export default function Header() {
  return (
    <header className="bg-[#181818] text-white py-10 px-4 md:px-8 border-b-[0.5px] border-b-[rgb(60,60,60)] top-0 sticky	z-50 shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[85%] mx-auto gap-4 md:gap-0">
        {/* Logo */}
        <h1 className="text-xl md:text-3xl text-[rgb(128,95,247)]">
          Nocturnal's
        </h1>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-2 md:space-x-3 w-full md:w-auto">
          <button className="px-4 py-2 text-lg text-white border border-white rounded-lg hover:bg-white hover:text-black transition w-full md:w-auto">
            Iniciar Sesión
          </button>
          <button className="px-4 py-2 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full md:w-auto">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}
