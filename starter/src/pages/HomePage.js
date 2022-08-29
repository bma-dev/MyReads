import React from 'react';
import AddBook from '../components/AddBook';
import BookShelf from '../components/BookShelf';
import PropTypes from "prop-types";



const HomePage = (books) => {


    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={books}  title={"Currently Reading"} />
                        <BookShelf books={books}  title={"Want to Read"}/>
                        <BookShelf books={books}  title={"Read"}/>
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