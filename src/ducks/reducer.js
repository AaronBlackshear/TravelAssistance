//INITIAL STATE
const initialState = {
  test: "test"
};

//ACTION TYPE
const TEST = "TEST";

//ACTION CREATOR
export function test() {
  return {
    type: TEST
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      console.log(state.test);
      return state;
    default:
      return state;
  }
}
