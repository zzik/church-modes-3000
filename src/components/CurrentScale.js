import React from "react"; // 200
// HOOKS
import { useSelector } from "react-redux";
// DATA
import notePool from "./json/notePool.json";
import modePool from "./json/modePool.json";

const CurrentScale = () => {
  const mode = useSelector((state) => state.mode);
  const rootNote = useSelector((state) => state.root);

  const chromatic = notePool.slice(rootNote, rootNote + 12);
  const intervals = modePool[mode].pattern;

  const diatonic = [];
  //for(let i = 0; i< )
  for (let i = 0; i < intervals.length; i++) {
    diatonic.push(chromatic[intervals[i]]);
  }

  return (
    <div>
      <span className="CurrentScale">{diatonic[0]} - </span>
      <span className="CurrentScale">{diatonic[1]} - </span>
      <span className="CurrentScale">{diatonic[2]} - </span>
      <span className="CurrentScale">{diatonic[3]} - </span>
      <span className="CurrentScale">{diatonic[4]} - </span>
      <span className="CurrentScale">{diatonic[5]} - </span>
      <span className="CurrentScale">{diatonic[6]}</span>
    </div>
  );
};

export default CurrentScale;
