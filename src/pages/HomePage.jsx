import React from "react";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const HomePage = () => {
  const {
    state: { books },
  } = useAppContext();

  const sections = [
    {
      id: "1",
      name: "Currently Reading",
      sectionBooks: books.filter(({ shelf }) => shelf === "currentlyReading"),
    },
    {
      id: "2",
      name: "Want to Read",
      sectionBooks: books.filter(({ shelf }) => shelf === "wantToRead"),
    },
    {
      id: "3",
      name: "Read",
      sectionBooks: books.filter(({ shelf }) => shelf === "read"),
    },
  ];

  return (
    <main className="home-page">
      <div className="nav-link">
        <Link to="/search" className="search-link">
          Search
        </Link>
      </div>

      {sections.map((section) => {
        return (
          <section key={section.id}>
            <h1>{section.name}</h1>

            <div className="books-container">
              {section.sectionBooks.length > 0 ? (
                section.sectionBooks.map((book) => (
                  <BookCard key={book._id} book={book} />
                ))
              ) : (
                <h2>No Books in this Shelf</h2>
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default HomePage;
