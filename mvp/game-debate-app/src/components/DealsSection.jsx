import React from 'react';
import { Tag, ExternalLink } from 'lucide-react';

const DealsSection = ({ deals }) => {
    return (
        <div className="glass-panel p-6 rounded-2xl border border-white/10 sticky top-24">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Tag size={18} className="text-game-primary" />
                Meilleures Offres
            </h3>
            <div className="space-y-3">
                {deals.map(deal => (
                    <a
                        key={deal.id}
                        href={deal.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/80 transition-all border border-transparent hover:border-game-primary/30 group"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-200 group-hover:text-white">{deal.store}</span>
                            {deal.discount && <span className="text-xs text-accent-pro font-bold">{deal.discount}</span>}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-white">{deal.price}</span>
                            <ExternalLink size={14} className="text-slate-500 group-hover:text-game-primary" />
                        </div>
                    </a>
                ))}
            </div>
            <p className="mt-4 text-xs text-center text-slate-500">
                Prix vérifiés il y a 5 minutes.
            </p>
        </div>
    )
}
export default DealsSection;
