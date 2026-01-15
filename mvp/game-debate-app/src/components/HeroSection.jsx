import { motion } from 'framer-motion';
import { Calendar, Clock, Star } from 'lucide-react';

const HeroSection = ({ game }) => {
    return (
        <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-game-dark via-game-dark/80 to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[2px] bg-game-dark/40" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider mb-6 text-game-primary backdrop-blur-md"
                >
                    <Calendar size={12} />
                    Jeu du Jour
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight"
                >
                    {game.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-light"
                >
                    {game.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-slate-200 border border-white/10">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{game.steamRating}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-slate-200 border border-white/10">
                        <Clock size={16} className="text-blue-400" />
                        <span className="font-mono">Fin du débat : 14:32:00</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default HeroSection;
