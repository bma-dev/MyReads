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
      const res = BooksAPI.getAll();
      getBooks(res);
    }
  })
 
  return (
    <div className="app">
       <Routes>
        <Route exact path={"/"} element={<HomePage books={books} />} />
        <Route path={"/search"} element={<Search />} />
      </Routes> 
    </div>
  );
}

export default App;
