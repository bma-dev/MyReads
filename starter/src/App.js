import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {


  const [books, setBooks] = useState([]);
 
    
    useEffect(() => {
      const getBooks = async () => {
        const res = await BooksAPI.getAll();
        setBooks(res);
      }
  
      getBooks();
    }, []);
  
    const updateBook = (book, newShelf) => {
      const updateLocalBook = () => {
        const idBook = books.findIndex((shelfBook) => {
          return shelfBook.id === book.id;
        })
  
        if (idBook >= 0) {
          let tempBooks = [...books];
          tempBooks[idBook].shelf = newShelf;
          setBooks(tempBooks);
        }
      }
  
      updateLocalBook();
    }


  return (
    <div className="app">
       <Routes>
        <Route exact path={"/"} element={<HomePage books={books} updateBook={updateBook} />} />
        <Route path={"/search"} element={<Search books={books}  updateBook={updateBook}/>} />
      </Routes> 
    </div>
  );
}

export default App;