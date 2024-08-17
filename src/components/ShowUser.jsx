import React from "react";
import "./ShowUser.css";

const ShowUser = ({ ...user }) => {
  return (
    <ul className="showUser">
      <li>
        <span>name :</span>
        {user.fname} {user.lname}
      </li>
      <li>
        <span>City: </span>
        {user.city}
      </li>
      <li>
        <span>Website: </span>
        {user.website}
      </li>
      <li>
        <span>Date: </span>
        {user.date}
      </li>
    </ul>
  );
};

export default ShowUser;
