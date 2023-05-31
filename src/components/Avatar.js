import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import avatar from "../assets/image-avatar.png";

const Avatar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // User is not logged in, redirect to login page
        navigate("/login");
      }
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
          <img onClick={handleLogout} className="avatar" src={avatar} alt="Avatar" />
        </div>
      ) : (
        // User is not logged in
        <div>
          <Link to="/login">
          <img onClick={handleLogout} className="avatar" src={avatar} alt="Avatar" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Avatar;
