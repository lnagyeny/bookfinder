import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link, useLocation } from "react-router-dom";
import { appBarMenuButtonStyle, appBarStyle, appBarTitleStyle } from "./styles";

const NavigationMenu = () => {
    const location = useLocation();
    
    return (
      <AppBar position="static" sx={appBarStyle}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Typography variant="h5" sx={appBarTitleStyle}>
              <MenuBookIcon/>
              BookFinder
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/"
                startIcon={<MenuBookIcon />}
                sx={{
                    ...appBarMenuButtonStyle,
                    color: location.pathname === '/' ? '#fff' : '#bb86fc',
                    backgroundColor: location.pathname === '/' ? '#8a4b6d' : 'transparent',
                    '&:hover': {
                        backgroundColor: location.pathname === '/' ? '#a25c80' : 'rgba(187, 134, 252, 0.1)',
                    },
                }}
              >
                Home
              </Button>
              
              <Button
                component={Link}
                to="/bookshelf"
                startIcon={<BookmarkIcon />}
                sx={{
                    ...appBarMenuButtonStyle,
                    color: location.pathname === '/bookshelf' ? '#fff' : '#bb86fc',
                    backgroundColor: location.pathname === '/bookshelf' ? '#8a4b6d' : 'transparent',
                    '&:hover': {
                        backgroundColor: location.pathname === '/bookshelf' ? '#a25c80' : 'rgba(187, 134, 252, 0.1)',
                    },
                }}
              >
                Bookshelf
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
export default NavigationMenu;