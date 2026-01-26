import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Star, Zap, Crown } from 'lucide-react';
import { cn } from '../lib/utils';

const SubscriptionModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const plans = [
        {
            name: "Novice",
            price: "Gratuit",
            period: "",
            description: "Parfait pour commencer à débattre tranquillement.",
            icon: Star,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            buttonValues: "Actuel",
            buttonStyle: "bg-slate-800 text-slate-400 cursor-default",
            features: [
                "Rejoindre les débats publics",
                "Voter sur les sujets du jour",
                "Personnalisation basique du profil"
            ]
        },
        {
            name: "Debater",
            price: "9.99€",
            period: "/mois",
            description: "Pour les joueurs sérieux qui veulent faire entendre leur voix.",
            popular: true,
            icon: Zap,
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/50 shadow-indigo-500/20 shadow-lg",
            buttonValues: "S'abonner",
            buttonStyle: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:scale-[1.02] shadow-lg shadow-indigo-500/25",
            features: [
                "Tout ce qu'il y a dans Novice",
                "Créer de nouveaux débats",
                "Priorité dans le matchmaking",
                "Badges de profil exclusifs",
                "Expérience sans publicité"
            ]
        },
        {
            name: "Légende",
            price: "19.99€",
            period: "/mois",
            description: "L'outil ultime pour les leaders de communauté.",
            icon: Crown,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
            buttonValues: "S'abonner",
            buttonStyle: "bg-slate-800 hover:bg-slate-700 text-white border border-white/10",
            features: [
                "Tout ce qu'il y a dans Debater",
                "Créer des ligues privées",
                "Analytiques avancées",
                "Formats de débat personnalisés",
                "Ligne de support direct"
            ]
        }
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/10 shadow-2xl"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                                Choisissez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Destinée</span>
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Libérez tout votre potentiel de débatteur avec nos offres premium.
                                Des plans évolutifs pour chaque niveau d'engagement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {plans.map((plan, index) => (
                                <div
                                    key={plan.name}
                                    className={cn(
                                        "relative flex flex-col p-6 rounded-2xl border transition-all duration-300",
                                        plan.bg,
                                        plan.border
                                    )}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                            Le plus populaire
                                        </div>
                                    )}

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={cn("p-2.5 rounded-lg bg-slate-950/50", plan.color)}>
                                            <plan.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black text-white">{plan.price}</span>
                                            <span className="text-slate-400 font-medium">{plan.period}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <ul className="mb-8 space-y-3 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                                <Check size={16} className={cn("mt-0.5 shrink-0", plan.color)} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={cn(
                                        "w-full py-3 rounded-xl font-bold transition-all duration-300",
                                        plan.buttonStyle
                                    )}>
                                        {plan.buttonValues}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default SubscriptionModal;
