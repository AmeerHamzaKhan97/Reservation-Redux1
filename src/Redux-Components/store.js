import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./Slices/reservationSlice";
import customerReducer from "./Slices/CustomerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customer: customerReducer,
  },
});
