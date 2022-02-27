import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        isLoggedIn: true,
      };
    case "logout":
      return {
        isLoggedIn: false,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    isLoggedIn: false,
  });
  return { globalState, globalDispatch };
};
export default useGlobalState;
