import { useState } from "react";

function ArrowButton({ children, isSelected }) {
  console.log(isSelected);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          backgroundColor: isSelected ? "#f00" : "#fff",
          width: "180px",
          borderRadius: "90px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ArrowButton;
