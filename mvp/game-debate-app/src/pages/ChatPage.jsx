import React, { useState, useRef, useEffect } from 'react';
import { Send, Users, Info, ThumbsUp, Scale, ThumbsDown, CornerDownLeft } from 'lucide-react';
import { MOCK_CHAT_MESSAGES, DAILY_GAME } from '../services/gameService';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const ChatPage = () => {
    const [messages, setMessages] = useState(MOCK_CHAT_MESSAGES);
    const [inputText, setInputText] = useState("");
    const [selectedSide, setSelectedSide] = useState(null);
    const [showMentions, setShowMentions] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);
        if (text.endsWith('@')) {
            setShowMentions(true);
        } else {
            setShowMentions(false);
        }
    };

    const handleMentionClick = (username) => {
        setInputText(prev => prev + username + " ");
        setShowMentions(false);
        document.getElementById('chat-input').focus();
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!selectedSide || !inputText.trim()) return;

        const newMessage = {
            id: Date.now(),
            author: "Moi",
            side: selectedSide,
            content: inputText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputText("");
        // Keep side selected for flow, or reset? Resetting is better for "Think before post"
        setSelectedSide(null);
    };

    return (
        <div className="container mx-auto px-4 pt-24 pb-10 h-screen flex flex-col">

            {/* Header Chat */}
            <div className="flex-none mb-4 flex items-center justify-between bg-slate-800/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Chat Public : {DAILY_GAME.title}
                    </h2>
                    <p className="text-xs text-slate-400">Sujet : {DAILY_GAME.question}</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Users size={12} /> 124 En ligne
                    </span>
                    <button className="text-xs font-bold text-game-primary border border-game-primary/30 px-3 py-1.5 rounded-lg hover:bg-game-primary/10 transition-colors">
                        Règles du débat
                    </button>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 scrollbar-thin">
                {messages.map((msg) => (
                    <ChatMessage key={msg.id} msg={msg} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Complex UX) */}
            <div className="flex-none bg-slate-900/80 border border-white/10 rounded-2xl p-4 shadow-2xl relative">

                {/* Mentions Popup */}
                {showMentions && (
                    <div className="absolute bottom-full left-4 mb-2 bg-slate-800 border border-white/10 rounded-xl shadow-xl p-2 w-48 z-10">
                        <p className="text-xs font-bold text-slate-500 mb-2 px-2">Mentionner...</p>
                        {['MelinoeStan', 'CriticalHit', 'NeutralGamer'].map(user => (
                            <button
                                key={user}
                                onClick={() => handleMentionClick(user)}
                                className="w-full text-left px-2 py-1.5 text-sm hover:bg-white/5 rounded text-slate-300 hover:text-white transition-colors"
                            >
                                @{user}
                            </button>
                        ))}
                    </div>
                )}

                <form onSubmit={handleSend} className="flex flex-col gap-4">

                    {/* Position Selector */}
                    <div className="flex gap-2">
                        <SideButton
                            side="pro"
                            icon={ThumbsUp}
                            label="POUR"
                            selected={selectedSide === 'pro'}
                            onClick={() => setSelectedSide('pro')}
                            color="text-accent-pro"
                        />
                        <SideButton
                            side="nuance"
                            icon={Scale}
                            label="NUANCÉ"
                            selected={selectedSide === 'nuance'}
                            onClick={() => setSelectedSide('nuance')}
                            color="text-accent-nuance"
                        />
                        <SideButton
                            side="con"
                            icon={ThumbsDown}
                            label="CONTRE"
                            selected={selectedSide === 'con'}
                            onClick={() => setSelectedSide('con')}
                            color="text-accent-con"
                        />
                    </div>

                    {/* Input Field */}
                    <div className="relative">
                        <input
                            id="chat-input"
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder={selectedSide ? "Argumente ton point de vue..." : "Choisis ta position ci-dessus pour écrire..."}
                            disabled={!selectedSide}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-game-primary focus:ring-1 focus:ring-game-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            disabled={!selectedSide || !inputText.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-game-primary text-white rounded-lg hover:bg-indigo-600 disabled:opacity-0 transition-opacity"
                        >
                            <Send size={16} />
                        </button>
                    </div>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center text-[10px] text-slate-600 uppercase font-bold tracking-wider">
                        <span>Mode lent actif (1 msg / 30s)</span>
                        <span>Respectez les autres</span>
                    </div>

                </form>
            </div>

        </div>
    );
};

const ChatMessage = ({ msg }) => {
    const isMe = msg.author === "Moi";

    // Badge Config
    const badgeConfig = {
        pro: { color: "text-accent-pro bg-accent-pro/10 border-accent-pro/20", icon: ThumbsUp },
        con: { color: "text-accent-con bg-accent-con/10 border-accent-con/20", icon: ThumbsDown },
        nuance: { color: "text-accent-nuance bg-accent-nuance/10 border-accent-nuance/20", icon: Scale }
    };

    const config = badgeConfig[msg.side];
    const BadgeIcon = config.icon;

    // Parse mentions loosely for display styling
    const parts = msg.content.split(/(@\w+)/g);

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex flex-col gap-1 ${isMe ? 'items-end' : 'items-start'}`}
        >
            <div className={`max-w-[80%] rounded-2xl p-3 border ${isMe ? 'bg-game-primary/10 border-game-primary/20 rounded-tr-none' : 'bg-slate-800/60 border-white/5 rounded-tl-none'}`}>

                {/* Header line inside bubble */}
                <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 border ${config.color}`}>
                        <BadgeIcon size={8} /> {msg.side.toUpperCase()}
                    </span>
                    <span className="text-xs font-bold text-slate-300">{msg.author}</span>
                    <span className="text-[10px] text-slate-600">{msg.timestamp}</span>
                </div>

                {/* Content */}
                <p className="text-sm text-slate-200 leading-relaxed break-words">
                    {parts.map((part, i) => (
                        part.startsWith('@')
                            ? <span key={i} className="text-indigo-400 font-bold bg-indigo-500/10 rounded px-1 cursor-pointer hover:bg-indigo-500/20">{part}</span>
                            : <span key={i}>{part}</span>
                    ))}
                </p>
            </div>

            {/* Actions (Hover only ideally, but visible for simplified mobile) */}
            {!isMe && (
                <div className="flex gap-2 px-2">
                    <button className="text-[10px] text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
                        <ThumbsUp size={10} /> Utile
                    </button>
                    <button className="text-[10px] text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
                        <CornerDownLeft size={10} /> Répondre
                    </button>
                </div>
            )}
        </motion.div>
    );
}

const SideButton = ({ side, icon: Icon, label, selected, onClick, color }) => (
    <button
        type="button"
        onClick={onClick}
        className={cn(
            "flex-1 py-2 rounded-lg border text-xs font-bold uppercase transition-all flex items-center justify-center gap-2",
            selected
                ? `bg-slate-800 ${color} border-current ring-1 ring-current`
                : "bg-slate-900 border-slate-700 text-slate-500 hover:bg-slate-800 hover:text-slate-300"
        )}
    >
        <Icon size={14} /> <span className="hidden sm:inline">{label}</span>
    </button>
)

export default ChatPage;
