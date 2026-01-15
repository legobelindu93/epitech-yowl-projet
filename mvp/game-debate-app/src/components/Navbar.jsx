import React from 'react';
import { NavLink } from 'react-router-dom';
import { Gamepad2, User, MessageSquare, Tag, Flame, MessagesSquare, Vote } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    // Helper for active link styles
    const linkClass = ({ isActive }) => cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        isActive
            ? "text-white bg-white/10"
            : "text-slate-400 hover:text-white hover:bg-white/5"
    );

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-strong h-16 px-4 md:px-8 flex justify-between items-center shadow-lg shadow-black/20">
            {/* Logo area */}
            <div className="flex items-center gap-3">
                <NavLink to="/" className="flex items-center gap-3 group">
                    <div className="p-1.5 bg-gradient-to-br from-game-primary to-violet-600 rounded-lg text-white shadow shadow-game-primary/30 group-hover:scale-105 transition-transform">
                        <Gamepad2 size={22} />
                    </div>
                    <h1 className="text-lg md:text-xl font-black tracking-tight text-white hidden sm:block">
                        Game<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Debate</span>
                    </h1>
                </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1 rounded-xl border border-white/5 backdrop-blur-md">
                <NavLink to="/" className={linkClass} end>
                    <Flame size={16} />
                    <span>Jeu du Jour</span>
                </NavLink>
                <NavLink to="/chat" className={linkClass}>
                    <MessagesSquare size={16} />
                    <span>Chat Public</span>
                </NavLink>
                <NavLink to="/propose" className={linkClass}>
                    <Vote size={16} />
                    <span>Votes & Propositions</span>
                </NavLink>
                <NavLink to="/deals" className={linkClass}>
                    <Tag size={16} />
                    <span>Promos</span>
                </NavLink>
            </div>

            {/* User & Mobile Menu placeholders */}
            <div className="flex items-center gap-4">
                <NavLink to="/messages" className={({ isActive }) => cn("p-2 rounded-full transition-colors relative", isActive ? "text-game-primary" : "text-slate-400 hover:text-white")}>
                    <MessageSquare size={20} />
                    {/* Notification dot placeholder */}
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-slate-900"></span>
                </NavLink>

                <NavLink to="/profile" className="flex items-center gap-3 pl-3 border-l border-white/10">
                    <span className="hidden lg:block text-xs font-semibold text-slate-300 text-right">
                        <div>Alex</div>
                        <div className="text-[10px] text-slate-500">Niv. 3 • Stratège</div>
                    </span>
                    <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-game-primary/50 transition-colors shadow-inner overflow-hidden">
                        <User size={18} className="text-slate-400" />
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
