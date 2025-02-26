# 📚 BookFinder

BookFinder is a web application that allows users to search for books, filter them by publication date and availability, and manage a personal bookshelf.

## ✨ Features

- 🔍 **Search for Books**: Search for books by title, author, or category.
- 🗂️ **Filter Results**: Filter search results by publication date and e-book availability.
- 📚 **Bookshelf Management**: Add books to your personal bookshelf and remove them as needed.
- 📱 **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

## 🛠️ Technologies Used

- ⚛️ **React**: A JavaScript library for building user interfaces.
- 🎨 **Material-UI**: A popular React UI framework.
- 🔄 **Axios**: A promise-based HTTP client for the browser and Node.js.
- 🧭 **React Router**: A library for routing in React applications.
- 📖 **Google Books API**: An API to search for books.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker and Docker Compose installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/lnagyeny/bookfinder.git
    cd bookfinder
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

#### Using npm

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to http://localhost:3000.

#### Using Docker Compose

1. Navigate to the project root directory:
    ```sh
    cd bookfinder
    ```

2. Build and start the application using Docker Compose:
    ```sh
    docker compose up
    ```

3. Open your browser and navigate to http://localhost:80.

#### 🌐 Live Demo

You can try the application directly at https://bookfinder-lnagyeny.vercel.app/.

## 📁 Project Structure

- `src/`: Contains the source code of the application.
  - `App.tsx`: The main application component.
  - `Home.tsx`: The home page component.
  - `Bookshelf.tsx`: The bookshelf page component.
  - `SearchBar.tsx`: The search bar component.
  - `NavigationMenu.tsx`: The navigation menu component.
  - `BookCard.tsx`: The book card component.
  - `styles.ts`: Contains the styling for the components.

## 🔍 Query Logic

### API Integration

The application integrates with the Google Books API using the following endpoint structure:
`https://www.googleapis.com/books/v1/volumes?q={searchTerms}&startIndex={startIndex}&maxResults={maxResults}`

### Search Implementation

1. **Query Construction**: 
   - Basic queries use the format `q={searchTerm}`

2. **Pagination Logic**:
   - Each page request uses `startIndex` parameter to define the starting point
   - `maxResults` parameter determines items per page
   - Total pages calculated using `Math.ceil(totalItems / maxResults)`

3. **Data Processing**:
   - Missing fields are populated with default values to ensure UI consistency

### Filtering Logic

1. **Date Range Filtering**:
   - Implemented client-side due to API limitations
   - Publication dates are extracted from the `publishedDate` field

2. **E-book Availability Filtering**:
   - When enabled, adds `&filter=ebooks` parameter to API request


### State Management

- Search parameters and results are managed in React state
- Filter settings are persisted in state and applied to API results
- Pagination state tracks current page, total pages, and items per page

### Error Handling

- Network errors are caught and displayed to users
- Empty results are handled gracefully with informative messages

### Bookshelf Integration

- Selected books are stored in browser's localStorage
- Books are serialized to JSON before storage and deserialized when retrieved
- Bookshelf state is managed separately from search state for better performance



## 📖 Usage

- **Search for Books**: Use the search bar to enter a query and click the search button.
- **Filter Results**: Click the filter icon to expand the filter options and set the desired filters.
- **Add to Bookshelf**: Click the bookmark icon on a book card to add the book to your bookshelf.
- **Remove from Bookshelf**: Navigate to the bookshelf page and click the remove icon on a book card to remove it from your bookshelf.

## ⏱️ Timeline

### Create a main page  (2 hours)
- Provide a main page to show the 3 genres (pl: fiction, science, biography) with 3 books by genre. After a search, you can choose to differ from this format!
- Display cards with detailed information including title, author, publication date, categories, and a short description.
- Create a menu item, where the user can navigate to the bookshelf page.
- Create a function for saving books to the shelf, it could be a button or a modal-form.
- Prepare a field or search bar, where you can implement the search.

###	Implement a search engine (1 hour)
Lists the results by calling google books endpoint. Implement a search feature that allows users to find books based on complex criteria, such as:
- Books with the author's name containing the typed keywords
- Books with titles containing certain keywords 
- Books published within a specific date range (optional)
- Books with e-book availability (optional)

###	Implement pagination for handling large sets of search results (1 hour)
A large amount of data can be retrieved in one search. Users will find it easier to navigate if it's fragmented, so display the data broken down into pages.
- Include "Next" and "Previous" buttons to navigate through pages.
- Display the number of pages between which the user can browse, the numbers should be clickable

### Bookshelf (1 hour)
You need to implement a page where you store the data that the user has requested and was selected from the search queries on the front-end.
- Create a ‘bookshelf’ page, where you can store your favorite books.
- Create a view, where the user can see the list. Each item should contain an author and title ordered by category.
- Provide an option to remove the book(s) from your shelf.

### Error handling needs to be there in every case of fetching data (30 minutes)
Proper error handling ensures that your application can gracefully handle unexpected situations, such as network failures, and provide meaningful feedback to users.
- Display user-friendly error messages, such as "Failed to load data" or "There is no data to display"


## ⚠️ Disclaimer

- Modifying the maxResults or startIndex parameters caused the totalItems value to fluctuate, leading to incorrect pagination. As a result, the last few pages could be empty. A potential workaround—prefetching the next page to adjust pagination—is not viable due to the excessive number of API requests required.
- Since the API does not support filtering by date range, this had to be handled locally. This introduced another issue where filtered results could leave empty pages in the pagination.