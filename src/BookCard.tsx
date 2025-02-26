import { Card, CardContent, Typography, Box, Tooltip} from "@mui/material";
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { bookCardAddButtonStyle, bookCardAuthorStyle, bookCardBoxStyle, bookCardCategoryBoxStyle, bookCardCategoryStyle, bookCardDescriptionStyle, bookCardImgNotSupportedStyle, bookCardStyle, bookCardTitleStyle } from "./styles";
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

interface BookCardProps {
  book: {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      publishedDate?: string;
      categories?: string[];
      description?: string;
      imageLinks?: { smallThumbnail?: string };
    };
  };
  addToBookshelf: (book: any) => void;
  removeFromBookshelf?: (bookId: string) => void;
  isRemoveButton?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, addToBookshelf, removeFromBookshelf, isRemoveButton }) => {
  return (
    <Card sx={ bookCardStyle}>
      <CardContent>
        <Box sx={bookCardBoxStyle}>
          <Typography sx={bookCardTitleStyle}>
            {book.volumeInfo.title}
          </Typography>
          {!isRemoveButton && (
            <Tooltip title="Add to Bookshelf" placement="bottom">
              <BookmarkAddIcon sx={bookCardAddButtonStyle} onClick={() => addToBookshelf(book)} />
            </Tooltip>
          )}
          {isRemoveButton && (
            <Tooltip title="Remove from Bookshelf" placement="bottom">
                <BookmarkRemoveIcon 
                    sx={{ ...bookCardAddButtonStyle, "&:hover": { bgcolor: "red", cursor: "pointer" } }} 
                    onClick={() => removeFromBookshelf && removeFromBookshelf(book.id)} 
                />
            </Tooltip>
        )}
        </Box>
        <Typography sx={bookCardAuthorStyle}>
          {book.volumeInfo.authors?.join(", ")}
        </Typography>
        <Typography>{book.volumeInfo.publishedDate}</Typography>
        {!book.volumeInfo.imageLinks?.smallThumbnail ? (
          <ImageNotSupportedIcon sx={bookCardImgNotSupportedStyle}/>
        ) : (
          <img
            srcSet={`${book.volumeInfo.imageLinks?.smallThumbnail.replace('http://', 'https://')}?w=164&h=164&fit=crop&auto=format 1x,`}
            src={`${book.volumeInfo.imageLinks?.smallThumbnail.replace('http://', 'https://')}?w=164&h=164&fit=crop&auto=format`}
            alt={book.volumeInfo.title}
            loading="lazy"
          />
        )}
        <Box sx={bookCardCategoryBoxStyle} >
          {book.volumeInfo.categories?.map((category) => (
            <Typography key={category} sx={bookCardCategoryStyle}>
              {category}
            </Typography>
          ))}
        </Box>
        <Typography sx={bookCardDescriptionStyle}>
          {book.volumeInfo.description ? book.volumeInfo.description : "No description available."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;