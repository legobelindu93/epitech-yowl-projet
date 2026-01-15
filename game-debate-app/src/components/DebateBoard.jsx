import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Scale, Info, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

const DebateBoard = ({ initialDebates }) => {
    const [debates, setDebates] = useState(initialDebates);
    const [newArg, setNewArg] = useState("");
    const [selectedSide, setSelectedSide] = useState(null); // 'pro', 'con', 'nuance'

    const handlePost = (e) => {
        e.preventDefault();
        if (!newArg.trim() || !selectedSide) return;

        const newEntry = {
            id: Date.now(),
            side: selectedSide,
            author: "Moi", // Mock auth
            category: "Nouveau",
            content: newArg,
            helpfulCount: 0
        };

        setDebates([newEntry, ...debates]);
        setNewArg("");
        setSelectedSide(null);
    };

    const debatesPro = debates.filter(d => d.side === 'pro');
    const debatesCon = debates.filter(d => d.side === 'con');
    const debatesNuance = debates.filter(d => d.side === 'nuance');

    return (
        <section className="container mx-auto px-4 pb-20 -mt-8 relative z-20">

            {/* INPUT SECTION - "Read First, Then React" Strategy */}
            <div id="debate-form" className="max-w-3xl mx-auto mb-16">
                <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl bg-slate-900/80">
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Participer au débat</h3>
                    <p className="text-slate-400 text-sm mb-6 text-center max-w-lg mx-auto">
                        Argumentez votre point de vue. Soyez constructif. Les attaques personnelles sont proscrites.
                    </p>

                    <form onSubmit={handlePost} className="space-y-6">
                        {/* Selector */}
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            <SelectionButton
                                type="pro"
                                active={selectedSide === 'pro'}
                                onClick={() => setSelectedSide('pro')}
                                icon={ThumbsUp}
                                label="POUR"
                                color="text-accent-pro"
                                border="border-accent-pro"
                                bg="bg-accent-pro/10"
                            />
                            <SelectionButton
                                type="nuance"
                                active={selectedSide === 'nuance'}
                                onClick={() => setSelectedSide('nuance')}
                                icon={Scale}
                                label="NUANCÉ"
                                color="text-accent-nuance"
                                border="border-accent-nuance"
                                bg="bg-accent-nuance/10"
                            />
                            <SelectionButton
                                type="con"
                                active={selectedSide === 'con'}
                                onClick={() => setSelectedSide('con')}
                                icon={ThumbsDown}
                                label="CONTRE"
                                color="text-accent-con"
                                border="border-accent-con"
                                bg="bg-accent-con/10"
                            />
                        </div>

                        {/* Text Area */}
                        <div className="relative">
                            <textarea
                                value={newArg}
                                onChange={(e) => setNewArg(e.target.value)}
                                placeholder={
                                    selectedSide === 'pro' ? "Pourquoi ce jeu vaut-il le coup ?..." :
                                        selectedSide === 'con' ? "Quels sont les défauts majeurs ?..." :
                                            selectedSide === 'nuance' ? "Quel est le pour et le contre ?..." :
                                                "Sélectionnez votre position ci-dessus pour commencer..."
                                }
                                disabled={!selectedSide}
                                maxLength={500}
                                className="w-full h-32 bg-slate-950/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-game-primary resize-none text-sm transition-all"
                            />
                            <div className="absolute bottom-3 right-3 text-xs text-slate-500">
                                {newArg.length}/500
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!selectedSide || !newArg.trim()}
                            className="w-full py-3 bg-white text-game-dark rounded-xl font-bold hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                            Publier mon argument
                        </button>
                    </form>
                </div>
            </div>

            {/* COLUMNS DISPLAY - 3 Columns Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* PRO */}
                <Column title="POUR" icon={ThumbsUp} colorClass="text-accent-pro" count={debatesPro.length}>
                    {debatesPro.map(d => <ArgumentCard key={d.id} data={d} type="pro" />)}
                </Column>

                {/* NUANCE */}
                <Column title="NUANCÉ" icon={Scale} colorClass="text-accent-nuance" count={debatesNuance.length}>
                    {debatesNuance.map(d => <ArgumentCard key={d.id} data={d} type="nuance" />)}
                </Column>

                {/* CON */}
                <Column title="CONTRE" icon={ThumbsDown} colorClass="text-accent-con" count={debatesCon.length}>
                    {debatesCon.map(d => <ArgumentCard key={d.id} data={d} type="con" />)}
                </Column>

            </div>
        </section>
    );
};

// UI Sub-components

const SelectionButton = ({ active, onClick, icon: Icon, label, color, border, bg }) => (
    <button
        type="button"
        onClick={onClick}
        className={cn(
            "p-4 rounded-xl border transition-all duration-200 flex flex-col items-center gap-2 group",
            active
                ? `${bg} ${border} ${color} ring-1 ring-offset-2 ring-offset-game-dark ${border}`
                : "bg-slate-800/30 border-slate-700 hover:bg-slate-800"
        )}
    >
        <Icon size={24} className={cn(active ? "scale-110" : "text-slate-400 group-hover:text-slate-200", "transition-transform")} />
        <span className={cn("text-xs font-bold tracking-wider", active ? "text-white" : "text-slate-400")}>{label}</span>
    </button>
);

const Column = ({ title, icon: Icon, colorClass, children, count }) => (
    <div className="flex flex-col h-full">
        <div className={`flex items-center justify-between mb-4 pb-2 border-b border-white/5 ${colorClass}`}>
            <h2 className="text-xl font-bold flex items-center gap-2">
                <Icon size={20} /> {title}
            </h2>
            <span className="text-sm font-medium opacity-60 bg-white/5 px-2 py-1 rounded-md">{count}</span>
        </div>
        <div className="space-y-4">
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </div>
    </div>
);

const ArgumentCard = ({ data, type }) => {
    let borderColor =
        type === 'pro' ? 'hover:border-accent-pro/50' :
            type === 'con' ? 'hover:border-accent-con/50' :
                'hover:border-accent-nuance/50';

    let badgeColor =
        type === 'pro' ? 'text-accent-pro bg-accent-pro/10' :
            type === 'con' ? 'text-accent-con bg-accent-con/10' :
                'text-accent-nuance bg-accent-nuance/10';

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            layout
            className={cn(
                "p-5 rounded-xl border border-white/5 bg-slate-800/40 relative transition-all group",
                borderColor
            )}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">
                        {data.author.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">@{data.author}</span>
                </div>
                <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded", badgeColor)}>
                    {data.category}
                </span>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed font-medium mb-4">
                {data.content}
            </p>

            {/* Discrete Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <button className="text-xs text-slate-500 hover:text-white flex items-center gap-1.5 transition-colors">
                    <ThumbsUp size={12} /> Utile {data.helpfulCount > 0 && <span className="opacity-70">({data.helpfulCount})</span>}
                </button>
                <button className="text-xs text-slate-500 hover:text-game-primary flex items-center gap-1.5 transition-colors">
                    <MessageSquare size={12} /> Répondre
                </button>
            </div>
        </motion.div>
    );
};

export default DebateBoard;
