import React, { useState } from 'react';
import { products } from '../../data/products';

const MARQUEE_DURATION = '20s';
const INITIAL_DISPLAY_COUNT = 2;
const YOUR_WHATSAPP_NUMBER = '5516992322494'; 


const Catalogo = () => {
  const [showAll, setShowAll] = useState(false);

  const productsToDisplay = showAll ? products : products.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreProducts = products.length > INITIAL_DISPLAY_COUNT;

  const MARQUEE_LIMIT = 20;

  const handleBuyClick = (title) => {
        // mensagem e o link do WhatsApp
        const baseMessage = 'Olá, Luiz! Me interessei pela obra: ';
        const fullMessage = `${baseMessage}${title}. Gostaria de mais informações.`;
        
        // Codifica a mensagem para uso na URL
        const encodedMessage = encodeURIComponent(fullMessage);
        
        // Utiliza o número fornecido
        const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        // Abre o link em uma nova aba
        window.open(whatsappUrl, '_blank');
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    document.getElementById('catalogo-section')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section id="catalogo-section" className="portfolio mb-8 px-1 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 border-b border-slate-700/50 pb-2">
        Catálogo de Trabalhos
      </h2>

      <style>{`
 @keyframes marquee-continuous {
 0% { transform: translateX(100%); } 
 100% { transform: translateX(-100%); }
 }

 .animate-marquee-continuous {
 animation: marquee-continuous ${MARQUEE_DURATION} linear infinite;
 }

 .marquee-container {
 overflow: hidden;
 width: 100%;
 display: flex; 
 white-space: nowrap;
  justify-content: center; 
 }

  .marquee-container.is-animated {
   justify-content: flex-start;
  }

 .marquee-text {
 display: inline-block;
  padding-right: 1rem;
 }
`}</style>

      <div className="gallery grid grid-cols-2 gap-2 w-full">
        {productsToDisplay.map((product) => {
          const isLongTitle = product.title.length > MARQUEE_LIMIT;

          return (
            <div
              key={product.id}
              className={`portfolio-item bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-[1.02] group ${product.sold ? 'opacity-70' : ''}`}
            >
              <div className="w-full h-auto overflow-hidden relative">
                <img
                  src={product.imgSrc}
                  alt={product.alt}
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/334155/ffffff?text=Quadro" }}
                />
              </div>

              <div className="info p-1.5 sm:p-2 text-center">

                <div className={`marquee-container mb-1 ${isLongTitle ? 'animate-marquee-continuous is-animated' : ''}`}>

                  <h3 className="marquee-text text-sm sm:text-base font-semibold text-white leading-tight">
                    {product.title}
                  </h3>
                                    {isLongTitle && (
                    <h3 className="marquee-text text-sm sm:text-base font-semibold text-white leading-tight">
                      {product.title}
                    </h3>
                  )}
                </div>

                {product.sold ? (
                  <p className="price text-base sm:text-lg font-extrabold mb-1 text-red-500">
                    INDISPONÍVEL
                  </p>
                ) : (
                  <>
                    <p className="price text-base sm:text-lg font-extrabold mb-1 text-amber-400">
                      {product.price || 'Consultar Preço'}
                    </p>
                    <button
                      className="w-full block text-center bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm py-1 rounded transition duration-200"
                      onClick={() => handleBuyClick(product.title)}
                    >
                      ENVIAR MENSAGEM (WhatsApp)
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {hasMoreProducts && !showAll && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Ver mais trabalhos ({products.length - INITIAL_DISPLAY_COUNT} restantes)
          </button>
        </div>
      )}

      {showAll && hasMoreProducts && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowLess}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Ver menos
          </button>
        </div>
      )}
    </section>
  );
};

export default Catalogo;