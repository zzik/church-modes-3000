import React from "react";
import {
  c,
  cSharp,
  d,
  dSharp,
  e,
  f,
  fSharp,
  g,
  gSharp,
  a,
  aSharp,
  h,
} from "../actions";
import { useDispatch } from "react-redux";

const RootsList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(c())}>C</button>
      <button onClick={() => dispatch(cSharp())}>C#</button>
      <button onClick={() => dispatch(d())}>D</button>
      <button onClick={() => dispatch(dSharp())}>D#</button>
      <button onClick={() => dispatch(e())}>E</button>
      <button onClick={() => dispatch(f())}>F</button>
      <button onClick={() => dispatch(fSharp())}>F#</button>
      <button onClick={() => dispatch(g())}>G</button>
      <button onClick={() => dispatch(gSharp())}>G#</button>
      <button onClick={() => dispatch(a())}>A</button>
      <button onClick={() => dispatch(aSharp())}>A#</button>
      <button onClick={() => dispatch(h())}>H</button>
    </div>
  );
};

export default RootsList;
