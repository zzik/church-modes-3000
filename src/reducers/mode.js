const modeReducer = (state = 0, action) => {
  switch (action.type) {
    case "IONIAN":
      return state = 0;
    case "DORIAN":
      return state = 1;
    case "PHRYGIAN":
      return state = 2;
    case "LYDIAN":
      return state = 3;
    case "MIXOLYDIAN":
      return state = 4;
    case "AEOLIAN":
      return state = 5;
    case "LOCRIAN":
      return state = 6;
    default:
        return state;
  }
};

export default modeReducer;