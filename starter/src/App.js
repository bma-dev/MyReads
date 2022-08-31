import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {


  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const getBooks= async ()=>{
     const books = await BooksAPI.getAll();
      setBooks(books);
    }; 
    getBooks();
  },[]);
 
  return (
    <div className="app">
       <Routes>
        <Route exact path={"/"} element={<HomePage books={books} />} />
        <Route path={"/search"} element={<Search books={books} />} />
      </Routes> 
    </div>
  );
}

export default App;
