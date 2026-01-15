import React from 'react';
import { MessageSquare, Users, Clock } from 'lucide-react';
import { MOCK_COMMUNITY_DEBATES } from '../services/gameService';

const DebatesListPage = () => {
    return (
        <div className="container mx-auto px-4 pt-24 pb-10">
            <h1 className="text-3xl font-black text-white mb-2">Débats de la communauté</h1>
            <p className="text-slate-400 mb-8">Discussions libres hors du "Jeu du Jour".</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_COMMUNITY_DEBATES.map(debate => (
                    <div key={debate.id} className="glass border border-white/5 rounded-2xl p-6 hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold text-game-primary bg-game-primary/10 px-2 py-1 rounded">
                                {debate.category}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Users size={12} /> {debate.participants}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                            {debate.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-4">
                            <Clock size={12} />
                            <span>Actif depuis 2h</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default DebatesListPage;
