import { useEffect, useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Lista de imágenes
  const images = [
    "imgs/pelea2.webp",
    "imgs/npc.webp",
    "imgs/mejoras.webp",
    "imgs/pelea.webp",
  ];

  // Función para pasar a la siguiente imagen
  const handleNextImage = () => {
    if (currentImage < images.length - 3) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  // Función para ir a la imagen anterior
  const handlePrevImage = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  // Inicializa IntersectionObserver para animar los elementos cuando entren en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add(
              "transition-all",
              "duration-1000",
              "ease-in-out",
              "opacity-100",
              "translate-y-0"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observa todos los elementos con la clase 'animate-on-scroll'
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Limpieza del observer cuando el componente se desmonte
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="bg-[#181818] text-white">
      {/* Sección de Bienvenida */}
      <section className="flex items-center justify-center px-6 py-20 md:px-12 animate-on-scroll opacity-0 translate-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[75%] border-b-[0.5px] border-b-[rgb(60,60,60)] pb-20">
          {/* Bloque de Texto */}
          <div className="text-left">
            <h1 className="text-6xl text-white pb-4">¡Bienvenido a</h1>
            <h2 className="text-6xl text-[rgb(128,95,247)]">
              Nocturnal Hunters!
            </h2>
            <p className="text-lg text-gray-400 mt-4">
              Intenta sobrevivir en el campo de batalla mientras eliminas
              enemigos con personajes diversos que podrás elegir.
            </p>
            <button
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
              aria-label="Iniciar juego"
            >
              Empezar
            </button>
          </div>

          {/* Bloque de Video */}
          <div className="w-full">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              muted
              loop
            >
              <source src="video/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Carrusel de Cartas de Imágenes */}
      <section className="px-6 py-10 md:px-12 max-w-[75%] mx-auto">
        <div className="flex justify-center items-center space-x-6 border-b-[0.5px] border-b-[rgb(60,60,60)] pb-20">
          <button
            onClick={handlePrevImage}
            className="text-white bg-[#222121] p-3 rounded-full hover:bg-gray-700 transition"
            aria-label="Imagen anterior"
            disabled={currentImage === 0}
          >
            Prev
          </button>

          <div className="flex overflow-hidden w-full justify-center">
            <div className="flex transition-transform duration-500">
              {/* Mapeo de las cartas con las imágenes */}
              {images
                .slice(currentImage, currentImage + 3)
                .map((image, index) => (
                  <div
                    key={index}
                    className="w-[400px] h-[300px] bg-gray-300 rounded-md overflow-hidden mx-2 animate-on-scroll opacity-0 translate-y-10"
                  >
                    <img
                      src={image}
                      alt={`Imagen ${currentImage + index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={handleNextImage}
            className="text-white bg-[#222121] p-3 rounded-full hover:bg-gray-700 transition"
            aria-label="Imagen siguiente"
            disabled={currentImage >= images.length - 2}
          >
            Next
          </button>
        </div>
      </section>

      {/* Detalles del Juego */}
      <section className="px-6 py-10 md:px-12 animate-on-scroll opacity-0 translate-y-10">
        <div className="max-w-[75%] mx-auto">
          <h2 className="text-6xl text-white">Detalles del juego</h2>
          <p className="text-lg text-gray-400 mt-4">
            Nocturnal Hunters es un juego de supervivencia al estilo roguelike.
            Consiste en sobrevivir mientras eliminas diversos enemigos, con
            personajes diversos que podrás elegir. Además, el juego cuenta con
            una aplicación de seguimiento donde puedes ver toda clase de
            información sobre personajes, enemigos, mejoras dentro del juego,
            datos personales y gráficos precisos de tus partidas y su respectiva
            información.
          </p>
        </div>

        {/* Contenedores en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[75%] mx-auto mt-10">
          {[
            "Personajes diversos",
            "Habilidades únicas",
            "Mejoras",
            "Desafíos",
          ].map((title, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[rgb(60,60,60)] bg-[#222121] rounded-lg p-6 animate-on-scroll opacity-0 translate-y-10"
            >
              <h3 className="text-2xl text-white">{title}</h3>
              <p className="text-lg text-gray-400 mt-2">
                Podrás elegir entre una variedad de personajes, cada uno con
                habilidades únicas que te ayudarán a sobrevivir en el juego.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Presentación del Personaje */}
      <section className="flex items-center justify-center px-6 py-10 md:px-12 pb-20 animate-on-scroll opacity-0 translate-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[75%] border-t-[0.5px] border-t-[rgb(60,60,60)] pt-20">
          {/* Bloque de Imagen */}
          <div className="w-full">
            <img
              src="imgs/capturaJuego.webp"
              alt="Personaje"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Bloque de Texto */}
          <div className="text-left animate-on-scroll">
            <h2 className="text-6xl text-white pb-4">Arandor el Sabio</h2>
            <h3 className="text-3xl text-[rgb(128,95,247)]">
              Medio mago, medio caballero
            </h3>
            <p className="text-lg text-gray-400 mt-4">
              Este es un breve resumen del personaje, su historia, habilidades y
              cómo puede ayudarte en tu lucha por sobrevivir en el juego. Cada
              personaje tiene sus propias fortalezas y debilidades.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
              Saber más
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
