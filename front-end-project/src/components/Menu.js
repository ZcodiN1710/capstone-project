import React from "react";
import greekSalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemon dessert.jpg";
const Menu = () => {
  const handleOrder = (e) => {
    if (e.target) {
      alert("Your Order has been recieved!");
    } 
  };
  return (
    <article>
      <div className="h1-btn">
        <h1>This week specials</h1>
        <button>Online menu</button>
      </div>
      <div className="menuWrapper">
      <section className="menu">
        <img src={greekSalad} />
        <div>
          <p>Greek salad</p>
          <p>$12.99</p>
        </div>
        <p>
          The famous greek salad of cripsy lettuce, peppers, olives and our
          chicago fota cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button onClick={handleOrder}>Order now</button>
      </section>
      <section className="menu">
        <img src={bruchetta} />
        <div>
          <p>Greek salad</p>
          <p>$5.99</p>
        </div>
        <p>
          The famous greek salad of cripsy lettuce, peppers, olives and our
          chicago fota cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button onClick={handleOrder}>Order now</button>
      </section>
      <section className="menu">
        <img src={lemonDessert} />
        <div>
          <p>Greek salad</p>
          <p>$4.99</p>
        </div>
        <p>
          The famous greek salad of cripsy lettuce, peppers, olives and our
          chicago fota cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button onClick={handleOrder}>Order now</button>
      </section>
      </div>
    </article>
  );
};

export default Menu;
