import React from 'react';
import Book from '../components/Book';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Search = ({books}) => {

    const [searchVal, setSearchVal] = useState('');

    const handleChange = (event) => {
        setSearchVal(event.target.value);
    };

    const filteredBooks = books.filter((book) => {
        return book.includes(searchVal);
    });

    console.log(searchVal);
    console.log(books);

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={searchVal}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {filteredBooks.map((book) => 
                          <Book key={book.id}  book={book}/>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
};

Search.propTypes = {
    books: PropTypes.array.isRequired,
};

export default Search;