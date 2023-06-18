import { createContext, useContext, useReducer } from "react";
import { books } from "../booksDB";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  books: books,
};

const reducer = (state, action) => {
  return {
    books: state.books.map((book) =>
      book._id === action.payload.id
        ? { ...book, shelf: action.payload.shelf }
        : book
    ),
  };
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
