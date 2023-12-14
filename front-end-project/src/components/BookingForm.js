import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BookingForm = () => {
  // const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [error, setError] = useState("");

  const handleReservation = () => {
    if (firstName && lasttName && date && time && guests && occasion) {
      alert("Your reservation has been confirmed!!.Thank you");
    } else {
      setError("Please fill up all the required fields.");
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    handleReservation(e);
    // navigate("/")
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="first-name">First name:</label>
          <input
            type="text"
            required
            id="first-name"
            value={firstName}
            placeholder="type here...."
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="last-name">Last name:</label>
          <input
            type="text"
            required
            id="last-name"
            placeholder="type here...."
            value={lasttName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="res-date">Choose date:</label>
          <input
            type="date"
            required
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label for="res-time">Choose time:</label>
          <select
            id="res-time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>

        <div>
          <label for="guests">Guests counts:</label>
          <input
            type="number"
            required
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <label for="occasion">Occasion:</label>
          <select
            id="occasion"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>other</option>
          </select>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="submit"
          id="submit"
          value="Make Your reservation"
          onClick={handleClick}
        />
      </form>
    </>
  );
};

export default BookingForm;
