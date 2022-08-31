import React from 'react';
import AddBook from '../components/AddBook';
import BookShelf from '../components/BookShelf';
import PropTypes from "prop-types";



const HomePage = ({books}) => {

    console.log(books);
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={books} category="currentlyReading"  title={"Currently Reading"} />
                        <BookShelf books={books} category="wantToRead" title={"Want to Read"}/>
                        <BookShelf books={books} category="read"  title={"Read"}/>
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