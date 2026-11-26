type CardProps = {
  classname?: string;
  imagessrc: string;
  diskon: string;
  nama : string;
  category?: string;
};

const products = [
  {
    id: 1,
    nama: "Handball Spezial Shoes",
    imagessrc: "https://assets.adidas.com/images/w_500,f_auto,q_auto/129cfe2e04da4e458c9edfad5c3a7eaf_9366/HANDBALL_SPEZIAL_SHOES_Pink_IH1499_01_00_standard.jpg",
    diskon: "20",
    category: "Shoes",
    price: "$1.310",
    priceValue: 1310,
    description: "Sepatu kasual bergaya retro dengan siluet klasik, upper nyaman, dan outsole kokoh untuk aktivitas sehari-hari.",
  },
  {
    id: 2,
    nama: "VL Court Classic Shoes",
    imagessrc: "https://assets.adidas.com/images/w_500,f_auto,q_auto/b25ef899f1a940908096063cb19a3d09_faec/Sepatu_VL_Court_Classic_Putih_JI0497_db01_00_standard.jpg",
    diskon: "30",
    category: "Shoes",
    price: "$1.310",
    priceValue: 1310,
    description: "Sneakers serbaguna dengan desain ramping dan nuansa clean yang mudah dipadukan dengan berbagai outfit.",
  },
  {
    id: 3,
    nama: "ADIZERO ADIOS PRO 5 Shoes",
    imagessrc: "https://assets.adidas.com/images/w_500,f_auto,q_auto/bb2d705904ad4e20a6211a2c2c19cdb7_faec/ADIZERO_ADIOS_PRO_5_Running_Shoes_Pink_KI8294_db01_00_standard.tiff.jpg",
    diskon: "30",
    category: "Shoes",
    price: "$1.310",
    priceValue: 1310,
    description: "Sepatu lari ringan dengan bantalan responsif dan konstruksi modern untuk mendukung performa harian.",
  },
  {
    id: 4,
    nama: "F50 MESSI ELITE",
    imagessrc: "https://assets.adidas.com/images/w_500,f_auto,q_auto/f325c8eb640c4dd98c66317419d0df5b_9366/F50_Messi_Elite_Firm_Ground_Football_Boots_Beige_IH1892_HM1.jpg",
    diskon: "30",
    category: "Shoes",
    price: "$1.310",
    priceValue: 1310,
    description: "Sepatu sepak bola berperforma tinggi dengan kontrol bola presisi dan warna Beige berkarakter.",
  },
  {
    id: 5,
    nama: "SPACER TEAMGEIST 26",
    imagessrc: "https://www.shoebacca.com/cdn/shop/files/SB1158-KT4423_2l.jpg?v=1787264465",
    diskon: "30",
    category: "Jacket",
    price: "$1.310",
    priceValue: 1310,
    description: "Jaket sporty berlapis nyaman dengan detail tim yang dinamis untuk tampilan kasual maupun olahraga.",
  },
  {
    id: 6,
    nama: "Liverpool FC Originals T-Shirt",
    imagessrc: "https://dynamic.zacdn.com/cf8XHkWcuICj66x89QOttncVoZ8=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/adidas-2500-7449735-1.jpg",
    diskon: "30",
    category: "Shirt",
    price: "$1.310",
    priceValue: 1310,
    description: "T-shirt Liverpool FC berpotongan santai dengan bahan lembut dan identitas klub yang iconic.",
  },
  {
    id: 7,
    nama: "Liverpool FC LFSTLR Track Top",
    imagessrc: "https://assets.adidas.com/images/w_500,f_auto,q_auto/e865724b87d0474d87733da9d6844e62_9366/Liverpool_FC_LFSTLR_Track_Top_Grey_KG2927_21_model.jpg",
    diskon: "30",
    category: "Jacket",
    price: "$1.310",
    priceValue: 1310,
    description: "Track top Liverpool FC dengan desain clean, material ringan, dan finishing modern untuk dipakai setiap hari.",
  },
  {
    id: 8,
    nama: "OVERSIZED TRACK PANTS",
    imagessrc: "https://assets.adidas.com/images/w_500,f_auto,q_auto/644ddd68d08046c89f891b790da473e7_9366/OVERSIZED_TRACK_PANTS_Black_KS7530_21_model.jpg",
    diskon: "30",
    category: "Pants",
    price: "$1.310",
    priceValue: 1310,
    description: "Celana track longgar berwarna hitam dengan potongan oversized, kenyamanan maksimal, dan gaya streetwear.",
  },
];
export default products;