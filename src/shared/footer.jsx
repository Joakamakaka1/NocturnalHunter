export default function Footer() {
    return (
      <footer className="bg-[#222121] text-white py-8 border-t-[0.5px] border-t-[rgb(60,60,60)] w-full">
        <div className="max-w-[75%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sección de información de la empresa */}
            <div>
              <h2 className="text-2xl">Nocturnal Hunters</h2>
              <p className="text-gray-400 mt-4">
                Un juego de supervivencia roguelike en donde tu única misión es
                sobrevivir.
              </p>
            </div>
  
            {/* Sección de enlaces */}
            <div>
              <h3 className="text-lg">Enlaces rápidos</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#!"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Detalles del juego
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Personajes
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Sección de redes sociales */}
            <div>
              <h3 className="text-lg">Síguenos</h3>
              <div className="flex space-x-6 mt-4">
                {/* Reemplazo de íconos por imágenes */}
                <a href="#!" className="transition">
                  <img
                    src="imgs/fcb.webp"
                    alt="Facebook"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
                <a href="#!" className="transition">
                  <img
                    src="imgs/ig.webp"
                    alt="Instagram"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
                <a href="#!" className="transition">
                  <img
                    src="imgs/playstore.webp"
                    alt="Playstore"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
          </div>
  
          {/* Línea de separación */}
          <div className="border-t-[0.5px] border-t-[rgb(60,60,60)] mt-8 pt-6">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nocturnal Hunters. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  