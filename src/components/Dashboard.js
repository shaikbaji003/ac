import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../assets/styles/Dashboard.module.css";
import Navigation from "./Navigation"; // Assuming you have a Navigation component

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [lastLogin, setLastLogin] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
    } else {
      setUser(loggedInUser);
      setLastLogin(new Date().toLocaleString());
    }
  }, [navigate]);

  return (
    <div className={style.dashboard}>
      <Navigation />
      <h2>Welcome, {user ? user.name : "User"}!</h2>
      <p>Last Login: {lastLogin}</p>
    </div>
  );
};

export default Dashboard;
