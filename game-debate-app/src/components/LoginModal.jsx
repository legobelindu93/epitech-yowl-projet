import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Github, Check } from 'lucide-react';
import { cn } from '../lib/utils';

const LoginModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Fake API call
        setTimeout(() => {
            setIsLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                onClose();
            }, 1000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-md glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-white mb-2">
                            {isLogin ? "Bon retour !" : "Rejoignez l'arène"}
                        </h2>
                        <p className="text-slate-400">
                            {isLogin
                                ? "Connectez-vous pour participer aux débats."
                                : "Créez un compte pour voter et débattre."}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="email"
                                    required
                                    placeholder="exemple@email.com"
                                    className="w-full bg-slate-900/50 border border-slate-700 focus:border-blue-500 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-slate-600 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider ml-1">Mot de passe</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-slate-900/50 border border-slate-700 focus:border-blue-500 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-slate-600 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || success}
                            className={cn(
                                "w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 mt-6",
                                success ? "bg-green-500" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] shadow-lg shadow-blue-500/25"
                            )}
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : success ? (
                                <>
                                    <Check size={20} />
                                    Connecté !
                                </>
                            ) : (
                                isLogin ? "Se connecter" : "S'inscrire"
                            )}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1" />
                        <span className="text-xs text-slate-500 uppercase">Ou continuer avec</span>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-colors text-sm font-medium text-white">
                            <Github size={18} />
                            GitHub
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-colors text-sm font-medium text-white">
                            <span className="font-bold">G</span>
                            Google
                        </button>
                    </div>

                    <p className="mt-8 text-center text-sm text-slate-400">
                        {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                        >
                            {isLogin ? "Créer un compte" : "Se connecter"}
                        </button>
                    </p>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LoginModal;
