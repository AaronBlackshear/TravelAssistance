//INITIAL STATE
const initialState = {
  test: "test"
};

//ACTION TYPE
const TEST = "TEST";

//ACTION CREATOR
export function test() {
  console.log(TEST);
  return {
    type: TEST
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
    console.log(action)
  switch (action.type) {
    case `TEST`:
      console.log(state.test);
      return state;
    default:
      return state;
  }
}
