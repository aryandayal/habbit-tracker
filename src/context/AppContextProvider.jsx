import { createContext, useContext, useReducer } from "react";

const habitsDB = [];

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = { habits: habitsDB, archives: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT": {
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    }

    case "EDIT_HABIT": {
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.payload.id ? { ...action.payload } : habit
        ),
      };
    }

    case "DELETE_HABIT": {
      return {
        ...state,
        habits: state.habits.filter(({ id }) => id !== action.payload),
      };
    }

    case "ADD_TO_ARCHIVE": {
      return {
        ...state,
        habits: state.habits.filter(({ id }) => id !== action.payload.id),
        archives: [...state.archives, action.payload],
      };
    }

    default:
      break;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
