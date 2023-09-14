import logo from "./logo.svg";
import "./App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  return (
    <div className="App">
      <div>
        <KeyboardArrowUpIcon sx={{ fontSize: 200 }} />
      </div>
      <div>
        <KeyboardArrowLeftIcon
          sx={{ fontSize: 200 }}
          style={{ padding: "5px 60px" }}
        />
        <KeyboardArrowRightIcon
          sx={{ fontSize: 200 }}
          style={{ padding: "5px 60px" }}
        />
      </div>
      <div>
        <KeyboardArrowDownIcon sx={{ fontSize: 200 }} />
      </div>
    </div>
  );
}

export default App;
