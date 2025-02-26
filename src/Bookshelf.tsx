import { Container, Typography} from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid2';
import BookCard from "./BookCard";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    categories?: string[];
    description?: string;
    imageLinks?: {
      smallThumbnail?: string;
    };
  };
}

const Bookshelf: React.FC<{ bookshelf: Book[]; removeFromBookshelf: (bookId: string) => void }> = ({ 
  bookshelf, 
  removeFromBookshelf 
}) => {
    // group books by category in a dictionary
  const booksByCategory = bookshelf.reduce((acc: { [key: string]: Book[] }, book: Book) => {
    const category = book.volumeInfo.categories?.[0] || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(book);
    return acc;
  }, {} as { [key: string]: Book[] });
    
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        My Bookshelf
      </Typography>
      {/* display the books under each category */}
      {bookshelf.length != 0 ? Object.entries(booksByCategory).map(([category, books]) => (
        <div key={category}>
          <Typography variant="h5" component="h2" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {books.map((book) => (
              <Grid size={{xs:12, sm:6, md:4 }}key={book.id}>
                <BookCard 
                  book={book}
                  addToBookshelf={() => {}}
                  removeFromBookshelf={() => removeFromBookshelf(book.id)}
                  isRemoveButton={true}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ))
    :
      <Typography variant="h6" component="p">
        Your bookshelf is empty.
        </Typography>
    }
    </Container>
  );
};
 
export default Bookshelf;