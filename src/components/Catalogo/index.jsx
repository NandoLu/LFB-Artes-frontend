import React, { useState } from 'react';
import { products } from '../../data/products';

const MARQUEE_DURATION = '20s';
const INITIAL_DISPLAY_COUNT = 2;


const Catalogo = () => {
    // Estado para controlar se todos os trabalhos estão visíveis
    const [showAll, setShowAll] = useState(false);

    // Lógica para determinar quais produtos mostrar
    const productsToDisplay = showAll ? products : products.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMoreProducts = products.length > INITIAL_DISPLAY_COUNT;

    const MARQUEE_LIMIT = 20;

    const handleBuyClick = (title) => {
        console.log(`Simulando adicionar "${title}" ao carrinho.`);
    };

    // Funções para alternar o estado de visualização
    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
        document.getElementById('catalogo-section')?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <section id="catalogo-section" className="portfolio mb-8 px-1 sm:px-0">
            {/* TÍTULO DO CATÁLOGO */}
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 border-b border-slate-700/50 pb-2">
                Catálogo de Trabalhos
            </h2>

            <style>{`
  @keyframes marquee-continuous {
      /* Posição inicial: texto totalmente visível (na extrema direita do container pai) */
  0% { transform: translateX(100%); } 
      /* Posição final: texto totalmente fora da tela à esquerda, o "novo" texto já começa a aparecer */
  100% { transform: translateX(-100%); }
  }

  .animate-marquee-continuous {
  animation: marquee-continuous ${MARQUEE_DURATION} linear infinite;
  }

  /* Classe de Contêiner - Aplicada a todos os títulos */
  .marquee-container {
  overflow: hidden;
  width: 100%;
  display: flex; 
  white-space: nowrap;
     /* Centraliza o texto se ele for curto e não estiver animado */
     justify-content: center; 
  }

    /* Para contêineres que estão ANIMADOS, remove o alinhamento central e move o início */
    .marquee-container.is-animated {
      justify-content: flex-start;
    }

  /* O texto em si deve ser maior que o contêiner */
  .marquee-text {
  display: inline-block;
     padding-right: 1rem; /* ALTERADO: Espaçamento entre as cópias do título (reduzido de 2rem para 1rem) */
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
                            {/* Imagem do Produto */}
                            <div className="w-full h-auto overflow-hidden relative">
                                <img
                                    src={product.imgSrc}
                                    alt={product.alt}
                                    className="w-full h-auto object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/334155/ffffff?text=Quadro" }}
                                />
                            </div>

                            {/* Informações do Produto */}
                            <div className="info p-1.5 sm:p-2 text-center">

                                {/* CONTAINER DO CARROSSEL */}
                                <div className={`marquee-container mb-1 ${isLongTitle ? 'animate-marquee-continuous is-animated' : ''}`}>

                                    {/* Título Principal */}
                                    <h3 className="marquee-text text-sm sm:text-base font-semibold text-white leading-tight">
                                        {product.title}
                                    </h3>

                                    {/* Renderiza a cópia apenas se o título for longo (para o loop) */}
                                    {isLongTitle && (
                                        <h3 className="marquee-text text-sm sm:text-base font-semibold text-white leading-tight">
                                            {product.title}
                                        </h3>
                                    )}
                                </div>

                                {/* Exibe APENAS INDISPONÍVEL ou o preço/botão */}
                                {product.sold ? (
                                    <p className="price text-base sm:text-lg font-extrabold mb-1 text-red-500">
                                        INDISPONÍVEL
                                    </p>
                                ) : (
                                    <>
                                        {/* Preço visível para itens disponíveis */}
                                        <p className="price text-base sm:text-lg font-extrabold mb-1 text-amber-400">
                                            {product.price}
                                        </p>
                                        {/* Botão de Ação */}
                                        <button
                                            className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-1 rounded transition duration-200"
                                            onClick={() => handleBuyClick(product.title)}
                                        >
                                            Comprar
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Botão para "Ver mais trabalhos" */}
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

            {/* Botão para "Ver menos trabalhos" */}
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