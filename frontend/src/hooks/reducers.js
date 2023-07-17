// Defining constant values
export const CONSTANTS = {
  // Actions to be used by reducers
  TOGGLE: "TOGGLE",
  SET: "SET",
  UNSET: "UNSET"
};

// Setting up the photo that we have clicked on
export function clickedPhotoReducer(state, action) {
  switch (action.type) {
    case CONSTANTS.SET:
      return action.info;
    case CONSTANTS.UNSET:
      return null;
    default:
      return state;
  }
}

//Setting up favourite photos array
export function favPhotoReducer(state, action) {
  switch (action.type) {
    case CONSTANTS.TOGGLE:
      if (!state.includes(action.id)) {
        return [...state, action.id];
      }
      return state.filter(i => i !== action.id);
    default:
      return state;
  }
}

