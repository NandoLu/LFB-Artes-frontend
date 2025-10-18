import Links from './components/Links/index.jsx';
import Catalogo from './components/Catalogo/index.jsx';

// Dados de Perfil
const profileData = {
 name: "Luiz Fernando Balbino",
 title: "Artista Plástico | Pinturas e Desenhos",
 photoUrl: "/eu.jpg" 
};

/**
 * @param {object} props
 */
function App({ children }) {
 const bgColor = "bg-[#1A2533]"; 

 return (
  <div className={`min-h-screen ${bgColor} flex justify-center p-2 sm:p-4 font-sans`}>
   <div className="w-full max-w-xl bg-slate-800/80 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
    
    {/* Seção do Cabeçalho */}
    <header className="text-center text-white mb-6">
     {/* Círculo de cor atrás da foto*/}
     <div className="relative inline-block">
      <div className="absolute inset-0 m-auto w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
      <img 
       src={profileData.photoUrl} 
       alt={`Foto de ${profileData.name}`} 
       className="w-28 h-28 object-cover rounded-full border-4 border-slate-700 mx-auto mb-4 relative"
       // Fallback para caso a imagem não carregue
       onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/112x112/334155/E2E8F0?text=LFB" }}
      />
     </div>
     <h1 className="text-3xl font-bold mb-1">{profileData.name}</h1>
     <p className="text-sm text-slate-400 font-medium tracking-wide">{profileData.title}</p>
    </header>

    {/* -------- Conteúdo principal -------- */}
    <main className="flex flex-col space-y-4">
     <Catalogo/>
     <Links/>
    </main>
   </div>
  </div>
 );
}

export default App;
