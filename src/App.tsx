import { useState} from "react";
import {
  Container,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import './App.css';
import Home from "./Home";
import Bookshelf from "./Bookshelf";
import NavigationMenu from "./NavigationMenu";
import _default from "@emotion/styled";

const saveBookshelf = (bookshelf: any[]) => {
  localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
};

const loadBookshelf = () => {
  const storedBookshelf = localStorage.getItem("bookshelf");
  return storedBookshelf ? JSON.parse(storedBookshelf) : [];
};

const App: React.FC = () => {

  const [bookshelf, setBookshelf] = useState<any[]>(loadBookshelf());
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");


  const addToBookshelf = (book: any) => {
    setBookshelf((prevBookshelf) => {
      if (prevBookshelf.some((b) => b.id === book.id)) {
        setSnackMessage("This book is already in your bookshelf!");
        setSnackOpen(true);
        return prevBookshelf;
      }
      const updatedBookshelf = [...prevBookshelf, book];
      setSnackMessage("Book added to bookshelf!");
      setSnackOpen(true);
      saveBookshelf(updatedBookshelf);
      return updatedBookshelf;
    });
  };

  const removeFromBookshelf = (bookId: string) => {
    setBookshelf((prevBookshelf) => {
      const updatedBookshelf = prevBookshelf.filter((book) => book.id !== bookId);
      saveBookshelf(updatedBookshelf);
      return updatedBookshelf;
    });
  };

  return (
    <Router>
      <NavigationMenu />
      <Container>
        <Routes>
          <Route path="/" element={<Home 
                                      addToBookshelf={addToBookshelf} 
                                      snackOpen={snackOpen} 
                                      setSnackOpen={setSnackOpen} 
                                      snackMessage={snackMessage} 
                                      setSnackMessage={setSnackMessage}
                                    />} 
          />
          <Route path="/bookshelf" element={<Bookshelf 
                                              bookshelf={bookshelf} 
                                              removeFromBookshelf={removeFromBookshelf} 
                                            />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
