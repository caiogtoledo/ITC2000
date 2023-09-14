import logo from "./logo.svg";
import "./App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import ArrowButton from "./components/arrowButton";

function App() {
  const initialState = {
    forward: false,
    right: false,
    back: false,
    left: false,
  };

  const [arrowsStates, setArrowsStates] = useState(initialState);

  function changeDirection(direction) {
    if (arrowsStates[direction]) {
      setArrowsStates(initialState);
    } else {
      let newState = initialState;
      newState[direction] = true;
      setArrowsStates(newState);
    }
  }

  return (
    <div className="App">
      <div onClick={() => changeDirection("forward")}>
        <ArrowButton isSelected={arrowsStates.forward}>
          <KeyboardArrowUpIcon sx={{ fontSize: 200 }} />
        </ArrowButton>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div onClick={() => changeDirection("left")}>
          <ArrowButton isSelected={arrowsStates.left}>
            <KeyboardArrowLeftIcon sx={{ fontSize: 200 }} />
          </ArrowButton>
        </div>

        <div onClick={() => changeDirection("right")}>
          <ArrowButton isSelected={arrowsStates.right}>
            <KeyboardArrowRightIcon sx={{ fontSize: 200 }} />
          </ArrowButton>
        </div>
      </div>
      <div onClick={() => changeDirection("back")}>
        <ArrowButton isSelected={arrowsStates.back}>
          <KeyboardArrowDownIcon sx={{ fontSize: 200 }} />
        </ArrowButton>
      </div>
    </div>
  );
}

export default App;
