import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Gamepad2, User, MessageSquare, Tag, Flame, MessagesSquare, Vote, Menu, X, Crown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import LoginModal from './LoginModal';
import SubscriptionModal from './SubscriptionModal';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [subModalOpen, setSubModalOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Navigation Items
    const navItems = [
        { path: '/', label: 'Jeu du Jour', icon: Flame },
        { path: '/chat', label: 'Chat Public', icon: MessagesSquare },
        { path: '/propose', label: 'Votes', icon: Vote },
        { path: '/deals', label: 'Promos', icon: Tag },
    ];

    return (
        <>
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
            <SubscriptionModal isOpen={subModalOpen} onClose={() => setSubModalOpen(false)} />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-7xl px-4",
                    scrolled ? "top-2" : "top-6"
                )}
            >
                <div className={cn(
                    "relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300",
                    "glass-strong border border-white/10 shadow-2xl shadow-blue-900/20",
                    scrolled && "py-2 bg-slate-900/80 backdrop-blur-xl"
                )}>

                    {/* Logo Section */}
                    <NavLink to="/" className="flex items-center gap-3 group relative z-10">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-40 group-hover:opacity-75 transition-opacity rounded-full"></div>
                            <div className="relative p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl text-white shadow-lg border border-white/20 group-hover:scale-105 transition-transform duration-300">
                                <Gamepad2 size={24} className="drop-shadow-md" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-black tracking-tight text-white leading-none">
                                Game<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Debate</span>
                            </h1>
                            <span className="text-[10px] text-blue-200 font-medium tracking-wider uppercase opacity-80 pl-0.5">Community</span>
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1.5 bg-slate-950/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group",
                                    isActive
                                        ? "text-white shadow-lg shadow-blue-500/25"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNavBg"
                                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <div className="relative flex items-center gap-2 z-10">
                                            <item.icon size={18} className={cn("transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
                                            <span>{item.label}</span>
                                        </div>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* User & Actions */}
                    <div className="flex items-center gap-3 md:gap-5 z-10">
                        {/* PREMIUM BUTTON */}
                        <button
                            onClick={() => setSubModalOpen(true)}
                            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/60 hover:text-yellow-300 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.2)] group"
                        >
                            <Crown size={16} className="fill-yellow-500/20 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-bold tracking-wide">PREMIUM</span>
                        </button>

                        {/* Messages */}
                        <NavLink to="/messages" className={({ isActive }) => cn(
                            "relative p-2.5 rounded-full transition-all duration-300 group hover:bg-white/10",
                            isActive ? "text-blue-400 bg-white/5" : "text-slate-400"
                        )}>
                            <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-slate-900 animate-pulse"></span>
                        </NavLink>

                        {/* Profile Pill - NOW OPENS LOGIN */}
                        <button
                            onClick={() => setLoginOpen(true)}
                            className="hidden sm:flex items-center gap-3 pl-1 pr-1 py-1 rounded-full border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 group"
                        >
                            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-slate-700 to-slate-800 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform overflow-hidden relative">
                                <User size={18} className="text-slate-300 relative z-10" />
                                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="flex flex-col items-end pr-3">
                                <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">Connexion</span>
                                <span className="text-[10px] text-blue-400 font-medium">Invité</span>
                            </div>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 lg:hidden"
                    >
                        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-2 shadow-2xl border border-white/10 ring-1 ring-black/5">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                                        isActive
                                            ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                                            : "text-slate-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <item.icon size={20} />
                                    <span className="font-semibold">{item.label}</span>
                                </NavLink>
                            ))}
                            <div className="h-px bg-white/10 my-2"></div>
                            <NavLink to="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white rounded-xl">
                                <User size={20} />
                                <span>Mon Profil</span>
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
