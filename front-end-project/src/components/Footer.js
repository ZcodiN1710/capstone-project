import React from "react";
import logo from "../images/Asset 9@4x.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="logoFooter">
        <img src={logo} alt="little lemon logo" />
        <p>LITTLE LEMON</p>
        </div>
        <p>
          We are a family owned Mediterranian <br/> restaurant, focused on traditional
          recipe <br/> served with modern twist.
        </p>
      </section>
      <section className="links">
        <h3>Important links</h3>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Services </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/reservations"> Reservation </Link>
        <Link to="/order online"> Order Online </Link>
        <Link to="/login"> Login </Link>
      </section>
      <section className="contacts">
        <h3>Contact</h3>
        <p> <span>Adress:</span> 123 town street chicago</p>
        <p> <span>Phone:</span>+00 123 456 789</p>
        <p> <span>Email:</span> little@lemon.com</p>
      </section>
      <section className="social-medias">
        <h3>Social media links</h3>
        <p>Facebook</p>
        <p>Instagramk</p>
        <p>Twitter</p>
      </section>
    </footer>
  );
};

export default Footer;
