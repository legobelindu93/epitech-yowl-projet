export const DAILY_GAME = {
  id: 1,
  title: "Hades II",
  developer: "Supergiant Games",
  genre: "Roguelike / Action",
  year: "2024",
  description: "Battez-vous au-delà des Enfers pour affronter le Titan du Temps.",
  question: "Ce jeu mérite-t-il son prix actuel (28,99€) en Early Access ?", // This is the "Débat du Jour"
  imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/header.jpg?t=1715020623", 
  platform: "PC (Steam)",
  steamRating: "Extrêmement positif",
};

export const INITIAL_DEBATES = [
  {
    id: 1,
    side: "pro", // pro, con, nuance
    author: "ZagreusFan99",
    category: "Gameplay",
    content: "Le nouveau système de magie ajoute une profondeur incroyable. Même à ce prix, le contenu est déjà énorme pour une EA.",
    helpfulCount: 45
  },
  {
    id: 2,
    side: "con",
    author: "OldSchoolGamer",
    category: "Business",
    content: "30 euros pour un jeu pas fini ? Non. Attendez la 1.0. Il y a assez de roguelikes finis à jouer en attendant.",
    helpfulCount: 22
  },
  {
    id: 3,
    side: "nuance",
    author: "BalancedView",
    category: "Contexte",
    content: "C'est cher pour une EA, mais Supergiant ne déçoit jamais. Je dirais : achetez pour soutenir, mais ne jouez pas tout de suite pour ne pas vous spoil.",
    helpfulCount: 30
  },
];

export const DEALS = [
  { id: 1, store: "Steam", price: "28.99€", link: "#", discount: "-10%" },
  { id: 2, store: "Epic Games", price: "29.99€", link: "#", discount: "" },
  { id: 3, store: "Instant Gaming", price: "24.50€", link: "#", discount: "-22%" },
];

export const MOCK_COMMUNITY_DEBATES = [
  { id: 101, title: "Silksong existe-t-il vraiment ?", participants: 1240, category: "Rumeur", votes: 890 },
  { id: 102, title: "Le prix de la PS5 Pro est-il justifié ?", participants: 850, category: "Hardware", votes: 450 },
  { id: 103, title: "GTA VI : Trop de hype ?", participants: 430, category: "Débat", votes: 230 },
];

export const MOCK_CHAT_MESSAGES = [
    { id: 1, author: "MelinoeStan", side: "pro", content: "Franchement le dash est bien mieux géré que dans le 1.", timestamp: "14:32" },
    { id: 2, author: "CriticalHit", side: "con", content: "@MelinoeStan Pas d'accord, je trouve qu'on glisse trop.", timestamp: "14:33" },
    { id: 3, author: "NeutralGamer", side: "nuance", content: "C'est une habitude à prendre, c'est juste différent.", timestamp: "14:34" },
];

export const PROPOSED_DEBATES = [
    { id: 201, title: "Elden Ring est-il trop difficile pour le grand public ?", category: "Gameplay", author: "SoulsVet", votes: 124 },
    { id: 202, title: "Les microtransactions cosmétiques sont-elles acceptables ?", category: "Business", author: "F2PPlayer", votes: 98 },
    { id: 203, title: "La VR a-t-elle un avenir grand nous ?", category: "Tech", author: "VirtualBoy", votes: 45 },
];
