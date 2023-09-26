import React, { createContext, useState } from "react";

export const ControllContext = createContext();

export function ControllProvider({ children }) {
  const initialState = {
    forward: false,
    right: false,
    back: false,
    left: false,
  };

  const [arrowsStates, setArrowsStates] = useState(initialState);
  const [speed, setSpeed] = useState(0);

  function changeDirection(direction) {
    if (arrowsStates[direction]) {
      setArrowsStates(initialState);
    } else {
      let newState = { ...initialState };
      newState[direction] = true;
      setArrowsStates(newState);
    }
  }

  return (
    <ControllContext.Provider
      value={{ arrowsStates, speed, changeDirection, setSpeed }}
    >
      {children}
    </ControllContext.Provider>
  );
}
