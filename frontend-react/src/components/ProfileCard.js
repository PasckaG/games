import React from "react";

const ProfileCard = ({ name, email }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-white max-w-sm w-full text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
        src="https://i.pinimg.com/736x/12/79/3a/12793a3f0bc3d83c8c4f38c4fa317144.jpg"
        alt="Profile"
      />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-400 mb-4">{email}</p>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
