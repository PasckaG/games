import React, { useEffect, useRef, useState } from 'react';
import './GamePage.css';

const tileWidth = 100;
const tileHeight = 150;
const canvasWidth = 400;
const canvasHeight = 600;
const numColumns = 4;
const fallSpeed = 5;

const beatMap = [1000, 1800, 2300, 2800, 3500, 4200, 4900]; // waktu tile muncul dalam ms

const GamePage = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [tiles, setTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const generateTile = () => {
    const column = Math.floor(Math.random() * numColumns);
    return {
      x: column * tileWidth,
      y: -tileHeight,
      column,
      clicked: false
    };
  };

  // Jalankan audio & spawn tile sesuai beatMap
  useEffect(() => {
    audioRef.current = new Audio('/audio/flashing.mp3');
    audioRef.current.play();

    beatMap.forEach(time => {
      setTimeout(() => {
        const tile = generateTile();
        setTiles(prev => [...prev, tile]);
      }, time);
    });
  }, []);

  // Gerakkan tile ke bawah
  useEffect(() => {
    const interval = setInterval(() => {
      setTiles(prev => {
        return prev.map(tile => ({ ...tile, y: tile.y + fallSpeed }));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Gambar tile ke canvas
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    tiles.forEach(tile => {
      context.fillStyle = tile.clicked ? "#999" : "black";
      context.fillRect(tile.x, tile.y, tileWidth, tileHeight);
    });

    context.fillStyle = "blue";
    context.font = "24px Arial";
    context.fillText(`Score: ${score}`, 10, 30);
  }, [tiles]);

  // Cek game over
  useEffect(() => {
    tiles.forEach(tile => {
      if (!tile.clicked && tile.y + tileHeight >= canvasHeight) {
        setGameOver(true);
      }
    });
  }, [tiles]);

  // Klik tile
  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const clickedTileIndex = tiles.findIndex(
      tile =>
        clickX >= tile.x &&
        clickX <= tile.x + tileWidth &&
        clickY >= tile.y &&
        clickY <= tile.y + tileHeight &&
        !tile.clicked
    );

    if (clickedTileIndex !== -1) {
      const newTiles = [...tiles];
      newTiles[clickedTileIndex].clicked = true;
      setTiles(newTiles);
      setScore(score + 1);
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">🎹 Piano Tiles Game</h1>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleClick}
      />
      <h2 className="score-text">Score: {score}</h2>
      {gameOver && <h2 className="game-over">Game Over</h2>}
    </div>
  );
};

export default GamePage;
