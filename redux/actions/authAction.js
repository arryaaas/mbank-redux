const restoreToken = (token) => {
  return {
    type: "RESTORE_TOKEN",
    userToken: token,
  };
};

const login = (token) => {
  return {
    type: "LOG_IN",
    userToken: token,
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export { restoreToken, login, logout };
