
    
    import React from 'react';
    import { Link } from 'react-router-dom';
    
    const games = [
      { id: 1, name: 'Piano Tiles', path: '/GamePage' },
      { id: 2, name: 'Game Lainnya', path: '/another-game' },
    ];
    
    const GameBar = () => {
      return (
        <div className="p-4 bg-gray-800 text-white">
          <h2 className="text-xl mb-2">Game List</h2>
          <ul>
            {games.map((game) => (
              <li key={game.id} className="mb-1">
                <Link to={game.path} className="hover:underline">{game.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default GameBar;
    