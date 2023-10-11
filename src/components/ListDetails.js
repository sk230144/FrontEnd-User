import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ListDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div>
    <div className="up-head">
    <h1>User Details</h1>
    </div>
      {user ? (
        <div className="user-detail">
      <div className="user-detail-header">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div className="user-detail-content">
        <div className="user-info">
          <h2>Contact Information</h2>
          <h3>Address:</h3>
          <p>Street: {user.address.street}</p>
          <p>Suit: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zip Code: {user.address.zipcode}</p>
          <h5>Geo:</h5>
          <p>lat: {user.address.geo.lat}</p>
          <p>lng: {user.address.geo.lng}</p>
          <h2>Phone:</h2>
          <p>{user.phone}</p>
        </div>

        <div className="user-info-right">
          <h2>Professional Information</h2>
          <h3>Company: </h3>
          <p>Name: {user.company.name}</p>
          <p>CaptchaPhrase: {user.company.catchPhrase}</p>
          <p>BS: {user.company.bs}</p>
          <h5>Website:</h5>
          <p>Link: {user.website}</p>
        </div>
      </div>
    </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default ListDetails;
