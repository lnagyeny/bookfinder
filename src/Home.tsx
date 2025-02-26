import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Pagination, IconButton, } from "@mui/material";
import Grid from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import React from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import { paginationContainerDivStyle, paginationStyle, titleStyles } from "./styles";

const Home: React.FC<{ addToBookshelf: (book: any) => void;
    snackOpen: boolean;
    setSnackOpen: (snackOpen: boolean) => void;
    snackMessage: string;
    setSnackMessage: (message: string) => void;
   }> = ({ addToBookshelf, snackOpen, setSnackOpen, snackMessage, setSnackMessage }) => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState<{ id: string; volumeInfo: { title: string; authors?: string[]; publishedDate?: string; categories?: string[]; description?: string; imageLinks?: { smallThumbnail?: string } } }[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });
    const [ebookOnly, setEbookOnly] = useState(false);
    // number of items to display per page
    const itemsPerPage = 36;
    // there is no science genre, so I changed it to history
    const genres = ["fiction", "history", "biography"];
  
    useEffect(() => {
      // fetch initial genres and books
      const fetchInitialBooks = async () => {
        const genreBooks = await Promise.all(
          genres.map(async (genre) => {
            const maxResults = 20;
            const response = await axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=${maxResults}`
            );
    
            if (!response.data.items) {
              return { genre, books: [] };
            }
    
            // filter books to ensure they have the given genre as a category
            const filteredBooks = response.data.items.filter((book: any) =>
              book.volumeInfo.categories?.some((category: string) =>
                category.toLowerCase().includes(genre)
              )
            );
    
            // return 3 books for the genre
            return { genre, books: filteredBooks.slice(0, 3) };
          })
        );
        setBooks(genreBooks.flatMap((genre) => genre.books));
      };
    
      fetchInitialBooks();
    }, []);
  
    const handleSearch = async (page = 1) => {
      if (search.length > 3) {
        try {
          const startIndex = (page - 1) * itemsPerPage;
          const filterQuery = ebookOnly ? '+ebooks' : '';
          const query = `${search}${filterQuery}`;

          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes`, {
              params: {
                q: query,
                maxResults: itemsPerPage,
                startIndex: startIndex,
                filter: ebookOnly ? 'ebooks' : undefined,
                printType: 'books'
              }
            }
          );

          let filteredBooks = response.data.items || [];

          // filter books by date range
          if (dateRange.startDate || dateRange.endDate) {
            filteredBooks = filteredBooks.filter((book: { volumeInfo: { publishedDate: string; }; }) => {
              const publishedDate = book.volumeInfo.publishedDate;
              if (!publishedDate) return false;
              
              // handle different date formats
              const dateComponents = publishedDate.split('-');
              const year = parseInt(dateComponents[0]);
              const month = dateComponents.length > 1 ? parseInt(dateComponents[1]) - 1 : 0;
              const day = dateComponents.length > 2 ? parseInt(dateComponents[2]) : 1;
              const bookDate = new Date(year, month, day);
              
              if (dateRange.startDate && bookDate < dateRange.startDate) {
                return false;
              }
              
              if (dateRange.endDate && bookDate > dateRange.endDate) {
                return false;
              }
              
              return true;
            });
          }

          setBooks(filteredBooks);
  
          // only update totalItems and totalPages at the initial search
          if (page === 1) {
            setTotalItems(response.data.totalItems || 0);
            setTotalPages(Math.floor(response.data.totalItems / itemsPerPage));
          }
  
          setCurrentPage(page);
        } catch (error) {
            console.error("Error fetching books", error);
            setSnackMessage("Failed to load data");
            setSnackOpen(true);
        }
      }
    };
  
    // handle search field
    const handleChange = (e:any) => {
      setSearch(e.target.value);
    };
  
    // handle pagination
    const handlePageChange = (_:any, page:any) => {
      handleSearch(page);
    };
  
    // handle snack close
    const snackHandleClose = (
    ) => {
      setSnackOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => snackHandleClose()}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
    return (
      <Container>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={titleStyles}
        >
        Discover Books
        </Typography>
        <SearchBar 
         search={search}
         handleChange={handleChange} 
         handleSearch={() => handleSearch(1)} 
         dateRange={dateRange} 
         setDateRange={setDateRange}
         ebookOnly={ebookOnly}
         setEbookOnly={setEbookOnly}
        />
        {/* 
            if the totalItems is 0, it is our initial homepage
            so we display the name of each genre and 3 books
        */}
        {totalItems===0 ? genres.map((genre, genreIndex) => (
            <div key={genre}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </Typography>
                <Grid container spacing={3}>
                {books
                    .filter((_, bookIndex) => Math.floor(bookIndex / 3) === genreIndex)
                    .map((book) => (
                    <Grid size={{xs:12, sm:6, md:4 }} key={book.id}>
                        <BookCard book={book} addToBookshelf={addToBookshelf} />
                    </Grid>
                    ))}
                </Grid>
            </div>
        ))
        :
        // if totalItems is not 0, we display the books given by the search
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {books.map((book) => (
            <Grid size={{xs:12, sm:6, md:4 }} key={book.id}>
                <BookCard book={book} addToBookshelf={addToBookshelf} />
            </Grid>
          ))}
        </Grid>
    }

        
  
        {/* pagination */}
        {totalPages > 0 && (
          <div style={paginationContainerDivStyle}>
            <Pagination
              showFirstButton
              showLastButton
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              sx={paginationStyle}
            />
          </div>
        )}
  
        {/* display total results */}
        {totalItems > 0 && (
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            Total results: {totalItems}
          </Typography>
        )}

        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={snackHandleClose}
          message={snackMessage}
          action={action}
        />
      </Container>
    );
  };

export default Home;