import React, { useState } from 'react';
import GameHeader from '../components/GameHeader';
import DebateBoard from '../components/DebateBoard';
import { DAILY_GAME, INITIAL_DEBATES } from '../services/gameService';

/* Screen 1: Game of the Day (Aggregated View) */
const GamePage = () => {
    const [debates, setDebates] = useState(INITIAL_DEBATES);

    return (
        <>
            <GameHeader game={DAILY_GAME} />
            <DebateBoard initialDebates={debates} />
        </>
    );
};
export default GamePage;
