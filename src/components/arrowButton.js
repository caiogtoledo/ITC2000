import { useState } from "react";

function ArrowButton({ children, isSelected }) {
  console.log(isSelected);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          backgroundColor: isSelected ? "#f00" : "#fff",
          width: "100px",
          borderRadius: "50px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ArrowButton;
