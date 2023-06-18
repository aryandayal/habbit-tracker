import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const BookCard = ({ book }) => {
  const { dispatch } = useAppContext();

  const shelfChangeHandler = (e, bookId) => {
    dispatch({ payload: { id: bookId, shelf: e.target.value } });
  };

  return (
    <div className="book-card">
      <img src={book.img} alt="" />
      <h2>{book.name}</h2>
      <p>{book.author}</p>
      <FormControl size="small">
        <InputLabel id="shelf-label">Shelf</InputLabel>
        <Select
          labelId="shelf-label"
          id="select"
          value={book.shelf}
          label="Shelf"
          onChange={(e) => shelfChangeHandler(e, book._id)}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="currentlyReading">Currently Reading</MenuItem>
          <MenuItem value="wantToRead">Want to Read</MenuItem>
          <MenuItem value="read">Read</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default BookCard;
