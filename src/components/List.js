import axios from "axios";
import React, { useState, useEffect } from "react";
import '../App.css'
import { Link } from "react-router-dom";

export default function List() {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setData(response.data);
    });
  }, []);


  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id} className="user-card">
            <img src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg" alt={user.name} className="user-avatar" />
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
            </div>
            <Link to={`/users/${user.id}`} className="user-button">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}



