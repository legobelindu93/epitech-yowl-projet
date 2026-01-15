import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Send, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

const DebateArena = ({ initialDebates }) => {
    const [debates, setDebates] = useState(initialDebates);
    const [newArg, setNewArg] = useState("");
    const [selectedSide, setSelectedSide] = useState(null); // 'pro' or 'con'

    const handlePost = (e) => {
        e.preventDefault();
        if (!newArg.trim() || !selectedSide) return;

        const newEntry = {
            id: Date.now(),
            side: selectedSide,
            author: "Moi",
            tag: "Nouveau",
            content: newArg,
            upvotes: 0
        };

        setDebates([newEntry, ...debates]);
        setNewArg("");
        setSelectedSide(null);
    };

    const debatesPro = debates.filter(d => d.side === 'pro');
    const debatesCon = debates.filter(d => d.side === 'con');

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">

                {/* PRO COLUMN */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-accent-pro mb-6 flex items-center gap-3">
                        <ThumbsUp className="fill-accent-pro/20" /> POURQUOI Y JOUER
                    </h2>
                    <div className="space-y-4">
                        <AnimatePresence>
                            {debatesPro.map((d) => (
                                <ArgumentCard key={d.id} data={d} color="pro" />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* VS DIVIDER OR INPUT AREA (Sticky on Desktop) */}
                <div className="w-full md:w-96 shrink-0 order-first md:order-none">
                    <div className="sticky top-24 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">Participer au débat</h3>
                        <p className="text-slate-400 text-sm mb-6 text-center">Votre avis compte pour la communauté.</p>

                        <form onSubmit={handlePost} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setSelectedSide('pro')}
                                    className={cn(
                                        "p-3 rounded-xl border transition-all flex flex-col items-center gap-2",
                                        selectedSide === 'pro'
                                            ? "bg-accent-pro/20 border-accent-pro text-accent-pro"
                                            : "bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800"
                                    )}
                                >
                                    <ThumbsUp size={20} />
                                    <span className="text-sm font-bold">POUR</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedSide('con')}
                                    className={cn(
                                        "p-3 rounded-xl border transition-all flex flex-col items-center gap-2",
                                        selectedSide === 'con'
                                            ? "bg-accent-con/20 border-accent-con text-accent-con"
                                            : "bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800"
                                    )}
                                >
                                    <ThumbsDown size={20} />
                                    <span className="text-sm font-bold">CONTRE</span>
                                </button>
                            </div>

                            <textarea
                                value={newArg}
                                onChange={(e) => setNewArg(e.target.value)}
                                placeholder={selectedSide ? `Votre meilleur argument ${selectedSide === 'pro' ? 'POUR' : 'CONTRE'}...` : "Choisissez un camp d'abord..."}
                                disabled={!selectedSide}
                                className="w-full h-32 bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-game-primary resize-none text-sm"
                            />

                            <button
                                type="submit"
                                disabled={!selectedSide || !newArg.trim()}
                                className="w-full py-3 bg-game-primary text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-game-primary/25"
                            >
                                <Send size={18} />
                                Publier mon avis
                            </button>
                        </form>
                    </div>
                </div>

                {/* CON COLUMN */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-accent-con mb-6 flex items-center gap-3 md:justify-end">
                        <ThumbsDown className="fill-accent-con/20" /> POURQUOI PASSER
                    </h2>
                    <div className="space-y-4">
                        <AnimatePresence>
                            {debatesCon.map((d) => (
                                <ArgumentCard key={d.id} data={d} color="con" />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

const ArgumentCard = ({ data, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            layout
            className={cn(
                "p-5 rounded-xl border relative overflow-hidden group hover:shadow-lg transition-all",
                color === 'pro'
                    ? "bg-slate-800/40 border-slate-700 hover:border-accent-pro/30"
                    : "bg-slate-800/40 border-slate-700 hover:border-accent-con/30"
            )}
        >
            {/* Side Indicator Line */}
            <div className={cn(
                "absolute top-0 left-0 bottom-0 w-1",
                color === 'pro' ? "bg-accent-pro" : "bg-accent-con"
            )} />

            <div className="flex justify-between items-start mb-2 pl-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-1 rounded">
                    {data.tag}
                </span>
                <span className="text-xs text-slate-500 font-medium">@{data.author}</span>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed pl-3 font-medium">
                {data.content}
            </p>

            <div className="mt-4 flex items-center gap-4 pl-3">
                <button className="text-xs font-bold text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
                    ▲ {data.upvotes}
                </button>
            </div>
        </motion.div>
    );
}

export default DebateArena;
