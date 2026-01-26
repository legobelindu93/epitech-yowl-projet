import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';
import DebatesListPage from './pages/DebatesListPage';
import ChatPage from './pages/ChatPage'; // New
import ProposePage from './pages/ProposePage'; // New
import DealsPage from './pages/DealsPage';

/* MVP Placeholder Pages for strictly non-core features */
const Placeholder = ({ title }) => (
  <div className="container mx-auto px-4 pt-32 text-center">
    <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
    <p className="text-slate-400">Fonctionnalité à venir dans la V2.</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30">
      <Navbar />

      <main className="pt-32">
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/propose" element={<ProposePage />} />
          <Route path="/debates" element={<DebatesListPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/messages" element={<Placeholder title="Messages Privés" />} />
          <Route path="/profile" element={<Placeholder title="Profil Joueur" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
