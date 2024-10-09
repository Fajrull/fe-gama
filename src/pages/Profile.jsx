/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../hooks/useAuth";
import ProfileContent from "../components/Layouts/ProfileContent";

const Profile = () => {
  useAuth();
  return (
    <>
      <ProfileContent />
    </>
  );
};

export default Profile;
