const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;