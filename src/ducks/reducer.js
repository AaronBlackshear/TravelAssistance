//INITIAL STATE
const initialState = {
  destination: ""
};

//ACTION TYPES
const FINISH_STEP_ONE = "FINISH_STEP_ONE";

//ACTION CREATORS
export function finishStepOne(destination) {
  return {
    type: FINISH_STEP_ONE,
    payload: destination
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FINISH_STEP_ONE":
      console.log(action.payload);
      return { ...state, destination: action.payload };
    default:
      return state;
  }
}
