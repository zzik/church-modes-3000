import React from "react"; // 200
// HOOKS
import { useSelector } from "react-redux";
// DATA
import notePool from "./json/notePool.json";
import modePool from "./json/modePool.json";
import voicingPool from "./json/voicingPool.json";

const ChordsList = () => {
  const mode = useSelector((state) => state.mode);
  const rootNote = useSelector((state) => state.root);

  const chromatic = notePool.slice(rootNote, rootNote + 12);
  const intervals = modePool[mode].pattern;

  const diatonic = [];
  for (let i = 0; i < intervals.length; i++) {
    diatonic.push(chromatic[intervals[i]]);
  }
  
  // declaring chord shapes
  const firstChord = []
  //                                                            //

  // pushing notes to chords
  const pusher = (chordNumber) => {
    for (let a = 0; a < 7; a++) {
      for (let b = 0; b < 4; b++) {
        chordNumber.push(diatonic[voicingPool[a][b]]);
      }
    }
  };
  // doing the pushing
  pusher(firstChord);


  return (
    <ol className="ChordsList">
      <li>{firstChord[0]} - {firstChord[1]} - {firstChord[2]} - {firstChord[3]}</li>
      <li>{firstChord[4]} - {firstChord[5]} - {firstChord[6]} - {firstChord[7]}</li>
      <li>{firstChord[8]} - {firstChord[9]} - {firstChord[10]} - {firstChord[11]}</li>
      <li>{firstChord[12]} - {firstChord[13]} - {firstChord[14]} - {firstChord[15]}</li>
      <li>{firstChord[16]} - {firstChord[17]} - {firstChord[18]} - {firstChord[19]}</li>
      <li>{firstChord[20]} - {firstChord[21]} - {firstChord[22]} - {firstChord[23]}</li>
      <li>{firstChord[24]} - {firstChord[25]} - {firstChord[26]} - {firstChord[27]}</li>

    </ol>
  );
};

export default ChordsList;
