import React from "react";
import "./App.css";
import MUITypography from "./components/MUITypography";
import MUIButtons from "./components/MUIButtons";
import { ButtonGroup } from "@mui/material";
import MUIButtonGroups from "./components/MUIButtonGroups";
import MUIToggleButtons from "./components/MUIToggleButtons";
import MUITextField from "./components/MUITextField";

function App() {
  return (
    <div className="App">
      {/* <MUITypography /> */}
      {/* <MUIButtons /> */}
      {/* <MUIButtonGroups /> */}
      {/* <MUIToggleButtons /> */}
      <MUITextField />
    </div>
  );
}

export default App;
