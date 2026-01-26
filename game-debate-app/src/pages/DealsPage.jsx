import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, MessageSquare, ArrowRight, Tag, Gamepad2 } from 'lucide-react';
import { DAILY_GAME } from '../services/gameService';

// Extended Mock Data for the page
const ALL_GAMES = [
    {
        id: 2,
        title: "Elden Ring: Shadow of the Erdtree",
        developer: "FromSoftware",
        price: "39.99€",
        discount: "-15%",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2778580/header.jpg",
        tags: ["RPG", "Souls-like", "Open World"],
        rating: "4.8"
    },
    {
        id: 3,
        title: "Cyberpunk 2077: Phantom Liberty",
        developer: "CD Projekt Red",
        price: "29.99€",
        discount: "-20%",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
        tags: ["Cyberpunk", "FPS", "RPG"],
        rating: "4.5"
    },
    {
        id: 4,
        title: "Balatro",
        developer: "LocalThunk",
        price: "13.99€",
        discount: "",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2379780/header.jpg",
        tags: ["Roguelike", "Card Game", "Indie"],
        rating: "4.9"
    },
    {
        id: 5,
        title: "Helldivers 2",
        developer: "Arrowhead",
        price: "39.99€",
        discount: "",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg",
        tags: ["Co-op", "Shooter", "Action"],
        rating: "4.6"
    },
    {
        id: 6,
        title: "Manor Lords",
        developer: "Slavic Magic",
        price: "29.99€",
        discount: "-25%",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1363080/header.jpg",
        tags: ["Strategy", "City Builder", "Medieval"],
        rating: "4.7"
    },
    {
        id: 7,
        title: "Hollow Knight: Silksong",
        developer: "Team Cherry",
        price: "TBA",
        discount: "",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg",
        tags: ["Metroidvania", "Indie", "Action"],
        rating: "Hyped"
    },
    {
        id: 8,
        title: "Dragon's Dogma 2",
        developer: "Capcom",
        price: "64.99€",
        discount: "-30%",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2054970/header.jpg",
        tags: ["RPG", "Action", "Open World"],
        rating: "Mixed"
    },
    {
        id: 9,
        title: "Black Myth: Wukong",
        developer: "Game Science",
        price: "59.99€",
        discount: "",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
        tags: ["Action", "RPG", "Mythology"],
        rating: "4.8"
    }
];

const DealsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter games including the daily game if it matches? 
    // Usually "Daily Game" is separate, so let's filter the list designated for the grid.
    const filteredGames = ALL_GAMES.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="container mx-auto px-4 pb-20 max-w-7xl">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        L'Arène des <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Titans</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                        Découvrez les jeux qui font débat. Analysez, votez et décidez de votre prochain achat avec la communauté.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="w-full md:w-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-400 transition-colors">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Rechercher un jeu, un genre..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-80 pl-11 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-2xl focus:border-blue-500/50 focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm font-medium text-white placeholder:text-slate-500"
                    />
                </div>
            </div>

            {/* Spotlight: Daily Game (Only show if no search or if matches search) */}
            {searchTerm === '' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 group mb-16"
                >
                    {/* Background with Gradient */}
                    <div className="absolute inset-0 z-0">
                        <img src={DAILY_GAME.imageUrl} alt={DAILY_GAME.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between min-h-[400px]">
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30 mb-4 backdrop-blur-md">
                                <Star size={12} className="fill-blue-300" />
                                Débat du Jour
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-none">
                                {DAILY_GAME.title}
                            </h2>
                            <p className="text-slate-300 text-lg mb-6 line-clamp-2 md:line-clamp-none max-w-xl">
                                {DAILY_GAME.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                                    {DAILY_GAME.genre}
                                </span>
                                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                                    {DAILY_GAME.platform}
                                </span>
                                <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-400 flex items-center gap-1">
                                    <Tag size={12} />
                                    -10% PROMO
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="px-8 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg shadow-white/10">
                                    Rejoindre le débat <ArrowRight size={18} />
                                </button>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
                                        +2k
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Stats */}
                        <div className="hidden md:flex flex-col gap-3">
                            <div className="glass-panel p-4 rounded-xl border border-white/10 backdrop-blur-md text-center min-w-[120px]">
                                <span className="block text-2xl font-black text-white">4.8</span>
                                <span className="text-xs text-slate-400 uppercase font-bold">Community</span>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/10 backdrop-blur-md text-center min-w-[120px]">
                                <span className="block text-2xl font-black text-white">850</span>
                                <span className="text-xs text-slate-400 uppercase font-bold">Votes</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Games Grid */}
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Gamepad2 className="text-blue-400" />
                {searchTerm ? `Résultats pour "${searchTerm}"` : "Tous les jeux"}
            </h3>

            {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredGames.map((game, index) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-[#0B2545]/40 rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 hover:bg-[#0B2545]/60 transition-all duration-300"
                        >
                            {/* Card Image */}
                            <div className="aspect-[16/9] overflow-hidden relative">
                                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                {game.discount && (
                                    <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-md shadow-lg">
                                        {game.discount}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h4 className="font-bold text-white text-lg mb-1 line-clamp-1 group-hover:text-blue-400 transition-colors">
                                    {game.title}
                                </h4>
                                <p className="text-slate-400 text-xs mb-4">{game.developer}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {game.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-white/5 text-slate-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="text-sm font-bold text-slate-200">
                                        {game.price}
                                    </div>
                                    <button className="p-2 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white text-slate-400 transition-colors">
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center">
                    <div className="inline-flex p-4 rounded-full bg-white/5 text-slate-500 mb-4">
                        <Search size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Aucun jeu trouvé</h3>
                    <p className="text-slate-400">Essayez de chercher un autre titre ou genre.</p>
                </div>
            )}
        </div>
    );
};
export default DealsPage;
