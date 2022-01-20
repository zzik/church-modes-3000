const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case "C":
      return state =0;
    case "C#":
      return state =1;
    case "D":
      return state =2;
    case "D#":
      return state =3;
    case "E":
      return state =4;
    case "F":
      return state =5;
    case "F#":
      return state =6;
    case "G":
      return state =7;
    case "G#":
      return state =8;
    case "A":
      return state =9;
    case "A#":
      return state =10;
    case "H":
      return state =11;
    default:
      return state;
  }
};

export default rootReducer;