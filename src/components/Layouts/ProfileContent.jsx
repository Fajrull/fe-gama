/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../Fragments/Header";
import Sidebar from "../Fragments/Sidebar";
import { GetProfile } from "../../services/User";

const ProfileContent = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await GetProfile();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Header />
      <div className="flex w-full h-auto text-center">
        <Sidebar />
        <main className="w-[90%] m-1 p-4 border-2 flex flex-col items-center gap-4">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile"
            className="w-[300px]"
          />
          <h1 className="text-2xl font-bold">Username : {profile?.username}</h1>{" "}
          <p>Email: {profile?.email}</p>
          <p>About: {profile?.about}</p>
        </main>
      </div>
    </>
  );
};

export default ProfileContent;
