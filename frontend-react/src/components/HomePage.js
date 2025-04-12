import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="text-2xl font-bold">-PinLes</div>
        <div className="space-x-4">
          <a hre f="#home" className="hover:text-blue-400">Home</a>
          <a href="/AbtPage" className="hover:text-blue-400">About</a>
          <a href="/Games" className="hover:text-blue-400">Game</a>
          <a href="/StorePage" className="hover:text-blue-400">Shop</a>
          <a href="/Login" className="hover:text-blue-400 hover:bg-white">LOGin</a>
          <a href="/Profiles" className="hover:text-blue-400">Profile</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-gray-900 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcomme To PinLes, user!</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Klik, iringi musik, dan jangan sampai salah! Uji kecepatan dan akurasi mu! wallahi, im cooked
        </p>
        <a href="#play">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl text-lg transition-all duration-300">
            Mulai Bermain
          </button>
        </a>
      </section>

      {/* Tentang Game */}
      <section id="about" className="py-16 bg-white text-gray-800 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">what is Pinles?</h2>
        <p className="max-w-2xl mx-auto text-lg">
          PinLes adalah game piano tiles yang menguji kecepatan tangan dan ketepatan reflek.
        click pada tiles hitam yg muncul dari atas ke bawah, seperti game musik pada umumnya Pinles juga mneyediakan beberapa jenis lagu "coming soon".
        </p>
      </section>

      {/* Section Mainkan Game */}
      <section id="play" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">ENTER THE GAME?</h2>
        <a href="/game">
          <button className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-3 px-6 rounded-xl text-lg transition-all duration-300">
            -YEAH!-
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; PinLes, copyright 2025</p>
      </footer>
    </div>
  );
};

export default HomePage;
