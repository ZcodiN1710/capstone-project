import React from "react";
import {useNavigate} from 'react-router-dom'
import image from '../images/restauranfood.jpg'
const Main = () => {
  const navigate = useNavigate()
  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranian restaurant, focused on
            traditional recipe served with modern twist
          </p>
          <button onClick={()=> navigate("reservations")}>Reserve a table</button>
        </div>
        <div>
          <img src={image} id='restauFoodImg' alt="food image"/>
        </div>
      </div>
    </div>
  );
};

export default Main;
