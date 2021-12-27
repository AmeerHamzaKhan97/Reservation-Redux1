import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./Redux-Components/Slices/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
  const dispatch = useDispatch();
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector((state) => state.customer.value);

  const handleReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return (
                  <ReservationCard key={index} name={name} index={index} />
                );
              })}
              {/* <div className="reservation-card-container">Laith Harb</div> */}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => {
            return (
              <CustomerCard
                key={index}
                index={index}
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}

          {/* <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
