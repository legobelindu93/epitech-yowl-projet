import { motion } from 'framer-motion';
import { Calendar, HelpCircle } from 'lucide-react';

const GameHeader = ({ game }) => {
    return (
        <section className="relative w-full py-12 md:py-20 flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
            {/* Background Image - Sober, blurred, darkened */}
            <div className="absolute inset-0 z-0">
                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover opacity-40 scale-105 blur-sm" />
                <div className="absolute inset-0 bg-game-dark/90" /> {/* Heavy overlay for focus */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-game-dark to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">

                {/* Meta Info */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-medium text-slate-400 mb-6 uppercase tracking-widest"
                >
                    <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">{game.platform}</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">{game.genre}</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">{game.year}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-xl tracking-tight"
                >
                    {game.title}
                </motion.h1>

                {/* The Central Question - Key UX Element */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl relative"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-game-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                        <HelpCircle size={14} /> QUESTION DU JOUR
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                        "{game.question}"
                    </h2>

                    <div className="mt-4 flex justify-center">
                        <button onClick={() => document.getElementById('debate-form').scrollIntoView({ behavior: 'smooth' })} className="text-sm font-semibold text-game-primary hover:text-indigo-400 transition-colors underline underline-offset-4">
                            Donner mon avis maintenant &darr;
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
export default GameHeader;
