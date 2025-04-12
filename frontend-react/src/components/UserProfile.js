import React from "react";
import ProfileCard from "./ProfileCard";

const UserProfile = () => {
  const email = localStorage.getItem("user");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <ProfileCard name="Iyan Pasckal" email={email || "Belum login"} />
    </div>
  );
};

export default UserProfile;
