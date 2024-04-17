const initialState = {
  isLoading: true,
  isLogout: false,
  userToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        isLoading: false,
        userToken: action.userToken,
      };
    case "LOG_IN":
      return {
        ...state,
        isLogout: false,
        userToken: action.userToken,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLogout: true,
        userToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
