import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const {
    state: { books },
  } = useAppContext();

  const showSearchedBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="search-page">
      <div className="nav-link">
        <Link to="/" className="home-link">
          <div className="nav-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.88em"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              ></path>
            </svg>
          </div>
        </Link>
        <div className="search-bar">
          <label htmlFor="search" className="">
            Search:{" "}
          </label>
          <input
            id="search"
            type="text"
            value={searchText}
            placeholder="search books"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-container">
        {searchText.length === 0 && <h2>Type in search</h2>}
        {showSearchedBooks.length === 0 && <h2>No books found!</h2>}
        {searchText.length > 0 &&
          showSearchedBooks.length > 0 &&
          showSearchedBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
      </div>
    </main>
  );
};

export default SearchPage;
