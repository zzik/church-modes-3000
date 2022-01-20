import React from "react"; // 200
// HOOKS
import { useSelector } from "react-redux";
// DATA
import notePool from "./components/json/notePool.json";
import modePool from "./components/json/modePool.json";
// COMPONENTS
import ModesList from "./components/ModesList";
import RootsList from "./components/RootsList";
import CurrentScale from "./components/CurrentScale";
import ChordsList from "./components/ChordsList";

function App() {
  const mode = useSelector((state) => state.mode);
  const rootNote = useSelector((state) => state.root);

  return (
    <div className="App">
      <h1 className="scoreboard">
         {notePool[rootNote]} - {modePool[mode].name}
      </h1>
      <ModesList />
      <RootsList />
      <CurrentScale />
      <ChordsList />
    </div>
  );
}

export default App;
