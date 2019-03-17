const initialState = {
  point:0
};

const reducer = (state=initialState, action) => {
  const newState = {...state};

  switch(action.type){
      case 'ADD': 
          newState.age += action.value;
          break;
      default:
          break;
  }
  return newState;
};

export default reducer;