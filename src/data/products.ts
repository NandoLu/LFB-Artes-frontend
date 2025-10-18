export interface Product {
    id: number;
    title: string;
    price: string;
    imgSrc: string;
    alt: string;
    sold: boolean;
}

// Catálogo de Produtos
export const products: Product[] = [
    {
        id: 1,
        title: "Beato Carlo Acutis",
        price: "R$ 70,00",
        imgSrc: "/quadros/beato-carlo-acutis.jpg",
        alt: "Beato Carlo Acutis",
        sold: false
    },
    {
        id: 2,
        title: "Menino Jesus e José",
        price: "R$ 110,00", 
        imgSrc: "/quadros/menino-jesus-e-jose.jpg",
        alt: "Menino Jesus e José",
        sold: true
    },
    {
        id: 3,
        title: "Icone Doce Beijo",
        price: "R$ 140,00",
        imgSrc: "/quadros/icone-doce-beijo.jpg",
        alt: "Icone Doce Beijo",
        sold: false
    },
    {
        id: 4,
        title: "Icone Pantokrator",
        price: "R$ 130,00",
        imgSrc: "/quadros/icone-pantokrator.jpg",
        alt: "Icone Pantokrator",
        sold: false
    },
    {
        id: 5,
        title: "Jesus - Retrato",
        price: "R$ 120,00",
        imgSrc: "/quadros/jesus-retrato.jpg",
        alt: "Jesus - Retrato",
        sold: false
    },
    {
        id: 6,
        title: "Tempestade no Mar da Galileia",
        price: "R$ 105,00",
        imgSrc: "/quadros/tempestade-no-mar-da-galileia.jpg",
        alt: "Tempestade no mar da Galileia",
        sold: true
    },
    {
        id: 7,
        title: "Coroação de Maria",
        price: "R$ 50,00",
        imgSrc: "/quadros/coroacao-de-maria.jpg",
        alt: "Coroação de Maria",
        sold: false
    },
    {
        id: 8,
        title: "Jesus Bom Pastor",
        price: "R$ 75,00",
        imgSrc: "/quadros/jesus-bom-pastor.jpg",
        alt: "Jesus Bom Pastor",
        sold: false
    },
];