import React from 'react';
import DealsSection from '../components/DealsSection';
import { DEALS } from '../services/gameService';

const DealsPage = () => {
    return (
        <div className="container mx-auto px-4 pt-24 pb-10 max-w-4xl">
            <h1 className="text-3xl font-black text-white mb-2">Promotions & Offres</h1>
            <p className="text-slate-400 mb-8">Ne payez jamais plein pot.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <DealsSection deals={DEALS} />
                </div>
                <div className="p-6 bg-game-primary/10 rounded-2xl border border-game-primary/20 flex flex-col items-center text-center justify-center">
                    <p className="text-game-primary font-bold text-lg mb-2">Vous ne savez pas quoi acheter ?</p>
                    <p className="text-slate-400 text-sm mb-4">Consultez les débats pour voir si le jeu en vaut la peine.</p>
                    <button className="px-6 py-2 bg-white text-game-dark rounded-full font-bold text-sm">
                        Voir les avis récents
                    </button>
                </div>
            </div>
        </div>
    );
};
export default DealsPage;
