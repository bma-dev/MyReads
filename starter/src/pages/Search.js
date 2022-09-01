import React from 'react';
import Book from '../components/Book';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";


const Search = ({updateBook}) => {

    const [searchVal, setSearchVal] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const getBooks= async ()=>{
         const books = await BooksAPI.getAll();
          setBooks(books);
        }; 
        getBooks();
    },[]);

    const handleChange = (event) => {
        setSearchVal(event.target.value);
    };

    const filteredBooks = books.filter((book) => {
         return book.title.toLowerCase().includes(searchVal);
    });

    


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
                          <Book key={book.id}  book={book} updateBook={updateBook}/>
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