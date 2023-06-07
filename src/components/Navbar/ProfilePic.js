import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import profilePic from "../../assets/profilePhoto.png"


const ProfilePic = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
  
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div>
      {auth.currentUser ? (
        // User is logged in
        <div>
          <img onClick={handleLogout} className="avatar" src={profilePic} alt="Avatar" />
        </div>
      ) : (
        // User is not logged in
        <div>
          <Link to="/login">
          <img onClick={handleLogout} className="avatar" src={profilePic} alt="Avatar" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfilePic;
