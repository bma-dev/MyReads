import React from 'react';
import AddBook from '../components/AddBook';
import BookShelf from '../components/BookShelf';
import PropTypes from "prop-types";


const HomePage = ({books, updateBook}) => {


    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={books} category="currentlyReading"  title={"Currently Reading"} updateBook={updateBook}/>
                        <BookShelf books={books} category="wantToRead" title={"Want to Read"} updateBook={updateBook}/>
                        <BookShelf books={books} category="read"  title={"Read"} updateBook={updateBook}/>
                    </div>
                </div>
                <AddBook />
            </div>
        </div>
    );
};

HomePage.propTypes = {
    books: PropTypes.array.isRequired,
};

export default HomePage;