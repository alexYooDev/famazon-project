const INITIAL_STATE = {
  currentUser: null,
};

/* state === previous state value( = default value), 
action === user's triggered event */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
