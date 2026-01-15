import React, { useState } from 'react';
import { ThumbsUp, PlusCircle, AlertCircle } from 'lucide-react';
import { PROPOSED_DEBATES } from '../services/gameService';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const ProposePage = () => {
    const [debates, setDebates] = useState(PROPOSED_DEBATES.sort((a, b) => b.votes - a.votes));
    const [hasVoted, setHasVoted] = useState(false);

    // Form state
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("Gameplay");

    const handleVote = (id) => {
        if (hasVoted) return; // Simple rule for MVP

        const updated = debates.map(d =>
            d.id === id ? { ...d, votes: d.votes + 1 } : d
        ).sort((a, b) => b.votes - a.votes); // Re-sort immediately

        setDebates(updated);
        setHasVoted(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Proposition envoyée ! (Simulation)");
        // Reset
        setTitle("");
        setDesc("");
    };

    return (
        <div className="container mx-auto px-4 pt-24 pb-10">

            <div className="grid lg:grid-cols-2 gap-12">

                {/* LEFT: VOTE FOR NEXT DEBATE */}
                <div>
                    <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                        <span className="text-yellow-500">🏆</span> Votez pour le prochain débat
                    </h2>
                    <p className="text-slate-400 mb-6 text-sm">
                        Le sujet ayant le plus de votes à minuit deviendra le "Débat du Jour" de demain.
                    </p>

                    <div className="space-y-4">
                        {debates.map((debate, index) => (
                            <motion.div
                                layout
                                key={debate.id}
                                className={cn(
                                    "p-4 rounded-xl border flex items-center justify-between transition-all relative overflow-hidden",
                                    index === 0 ? "bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/30" : "bg-slate-800/40 border-white/5"
                                )}
                            >
                                {index === 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>}

                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                                            {debate.category}
                                        </span>
                                        <span className="text-xs text-slate-500">par {debate.author}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-200 text-sm md:text-base">{debate.title}</h3>
                                </div>

                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-lg font-black text-white">{debate.votes}</span>
                                    <button
                                        onClick={() => handleVote(debate.id)}
                                        disabled={hasVoted}
                                        className={cn(
                                            "text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors",
                                            hasVoted
                                                ? "bg-slate-800 text-slate-600 cursor-not-allowed"
                                                : "bg-white text-game-dark hover:bg-indigo-50"
                                        )}
                                    >
                                        <ThumbsUp size={12} /> Voter
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: PROPOSE */}
                <div>
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 sticky top-24">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <PlusCircle className="text-game-primary" /> Proposer un sujet
                        </h2>

                        <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg flex gap-3 mb-6">
                            <AlertCircle size={20} className="text-blue-400 shrink-0" />
                            <p className="text-xs text-blue-200 leading-relaxed">
                                Vérifiez que le sujet n'a pas déjà été proposé. Soyez précis. Les sujets polémiques gratuits seront refusés.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 mb-1">TITRE DU SONDAGE / DÉBAT</label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Ex: Le prix des jeux PS5 est-il justifié ?"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-game-primary focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-400 mb-1">CATÉGORIE</label>
                                <select
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-game-primary focus:outline-none appearance-none"
                                >
                                    <option>Gameplay</option>
                                    <option>Business</option>
                                    <option>Graphismes</option>
                                    <option>Scénario</option>
                                    <option>Accessibilité</option>
                                    <option>Hardware</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-400 mb-1">CONTEXTE (OPTIONNEL)</label>
                                <textarea
                                    value={desc}
                                    onChange={e => setDesc(e.target.value)}
                                    placeholder="Donnez un peu de contexte pour orienter le débat..."
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-game-primary focus:outline-none h-24 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-game-primary hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                            >
                                Soumettre à la communauté
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProposePage;
