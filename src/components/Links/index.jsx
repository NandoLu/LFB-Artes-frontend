// Dados dos Links
const socialLinks = [
  { href: "https://wa.me/5516992322494", label: "Conversar no WhatsApp", color: "bg-green-500 hover:bg-green-600" },
  { href: "https://www.tiktok.com/@luiz.fernando.balbino?_t=ZM-8xnu5AGCU7y&_r=1", label: "TikTok", color: "bg-black hover:bg-gray-800" },
  { href: "https://www.instagram.com/luiz.fernando.balbino", label: "Instagram", color: "bg-pink-600 hover:bg-pink-700" },
  { href: "https://youtube.com/@luiz.fernando.balbino?si=FL9wzZwfIGrCm3Cz", label: "YouTube", color: "bg-red-600 hover:bg-red-700" },
  { href: "https://github.com/NandoLu", label: "GitHub", color: "bg-gray-700 hover:bg-gray-800" },
  { href: "https://www.linkedin.com/in/luiz-fernando-balbino-2336a1349/", label: "LinkedIn", color: "bg-blue-700 hover:bg-blue-800" },
];

const Links = () => {
  return (
    <>
      {/* Seção de Links */}
      <div className="links space-y-3">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href}
            target="_blank" 
            rel="noopener noreferrer"
            className={`button block text-center w-full p-3 font-medium text-white rounded-lg transition duration-200 shadow-md text-sm sm:text-base ${link.color}`}
          >
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Links;
