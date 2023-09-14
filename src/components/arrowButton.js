import { useState } from "react";

function ArrowButton({ children, isSelected }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          backgroundColor: isSelected ? "#f00" : "#fff",
          width: "200px",
          borderRadius: "100px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ArrowButton;
