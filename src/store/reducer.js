const initialState = {
  point:0
};

const reducer = (state=initialState, action) => {
  const newState = {...state}; // New Object

  switch(action.type){
      case 'ADD': 
          newState.point = action.value;
          console.log("inside add", newState);
          break;
      case 'reset': 
          newState.point = 0;
          console.log("inside RESET", newState);
          break;
      default:
          break;
  }
  return newState;
};

export default reducer;