import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold">PinLes</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="/AbtPage" className="hover:text-blue-400">Tentang</a>
          <Link to="/GamePage" className="hover:text-blue-400">Game</Link>
          <a href="#shop" className="hover:text-blue-400">Shop</a>
          <a href="/LogPage" className="hover:text-blue-400">LOGin</a>
        </div>
      </nav>

      {/* shop card */}
      <div className="outline-2 outline-black py-2 px-3">
        is this the product?
      </div>

      {/* deskripsi shop */}
      <h1>DONT BUY THIS, OR YOULL REGRET!</h1>
      <h6>i was joking dude, u can buy this product ^^</h6>
      <button className="bg-red-600 hover:bg-red-700 text-white hover:text-2xl">okay</button>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; PinLes, copyright 2025</p>
      </footer>
    </div>
  );
};

export default HomePage;
