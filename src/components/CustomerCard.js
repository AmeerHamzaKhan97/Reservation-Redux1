import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFoodToCustomer,
  removeCustomer,
  removeFoodToCustomer,
} from "../Redux-Components/Slices/CustomerSlice";

export default function CustomerCard({ name, food, id, index }) {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  return (
    <>
      <div
        // onClick={() => dispatch(removeCustomer(index))}
        className="customer-food-card-container"
      >
            <button onClick={() => dispatch(removeCustomer(index))}>
            Remove Customer
          </button>
        <p>{name}</p>
        <div className="customer-foods-container">
        
          <div className="customer-food">
            {food.map((food, index) => {
              return (
                <>
                  <button onClick={() => dispatch(removeFoodToCustomer(id))}>
                    Remove
                  </button>
                  <p key={index}>{food}</p>
                </>
              );
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={customerFoodInput}
              onChange={(e) => setCustomerFoodInput(e.target.value)}
            />
            <button
              onClick={() => {
                if (!customerFoodInput) return;
                dispatch(
                  addFoodToCustomer({
                    id,
                    food: customerFoodInput,
                  })
                );
                setCustomerFoodInput("");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
