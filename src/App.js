import logo from "./logo.svg";
import "./App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContext, useState } from "react";
import ArrowButton from "./components/arrowButton";
import { ControllContext } from "./context/controllContex";

function App() {
  const { arrowsStates, speed, changeDirection, setSpeed } =
    useContext(ControllContext);
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        height: "80vh",
      }}
    >
      <div className="App">
        <div
          onClick={() => {
            changeDirection("forward");
          }}
        >
          <ArrowButton isSelected={arrowsStates.forward}>
            <KeyboardArrowUpIcon sx={{ fontSize: 100 }} />
          </ArrowButton>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div onClick={() => changeDirection("left")}>
            <ArrowButton isSelected={arrowsStates.left}>
              <KeyboardArrowLeftIcon sx={{ fontSize: 100 }} />
            </ArrowButton>
          </div>

          <div onClick={() => changeDirection("right")}>
            <ArrowButton isSelected={arrowsStates.right}>
              <KeyboardArrowRightIcon sx={{ fontSize: 100 }} />
            </ArrowButton>
          </div>
        </div>
        <div onClick={() => changeDirection("back")}>
          <ArrowButton isSelected={arrowsStates.back}>
            <KeyboardArrowDownIcon sx={{ fontSize: 100 }} />
          </ArrowButton>
        </div>
      </div>
      <p style={{ marginLeft: "20px" }}>Velocidade: {speed}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ width: "80%" }}
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          defaultValue={speed}
          onChange={(event) => setSpeed(event.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
