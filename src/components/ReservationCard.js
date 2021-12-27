import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../Redux-Components/Slices/CustomerSlice";
import { removeReservation } from "../Redux-Components/Slices/reservationSlice";
import { v4 as uuid } from "uuid";

export default function ReservationCard({ name, index }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}
