import React from 'react';
import Book from './Book';


const BookShelf = ({ title, books, category, updateBook}) => {

   const booksCategory = books.filter((book)=> book.shelf === category);

    return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {booksCategory.map((book)=>(
                        <Book key={book.id}  book={book} updateBook={updateBook}/>
                    ))}
                    </ol>
                </div>
            </div>
    );



};

export default BookShelf;