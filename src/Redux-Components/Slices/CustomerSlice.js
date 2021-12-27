import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const CustomerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
    removeCustomer: (state, action) => {
      state.value.splice(action.payload, 1);
    },

    removeFoodToCustomer: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.splice(action.payload, 1);
        }
      });
    },
  },
});

export const {
  addCustomer,
  addFoodToCustomer,
  removeCustomer,
  removeFoodToCustomer,
} = CustomerSlice.actions;

export default CustomerSlice.reducer;
