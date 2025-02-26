export const titleStyles = {
    fontWeight: 600,
    color: '#e0e0e0',
    letterSpacing: '0.5px',
    marginBottom: '1.5rem',
    textAlign: 'center',
    position: 'relative',
    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      backgroundColor: '#8a4b6d',
      borderRadius: '3px',
    },
};

export const searchBarBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    width: '100%',
    maxWidth: '800px',
    mx: 'auto',
    padding: { xs: '0.5rem', sm: '1rem' },
    borderRadius: '10px',
    backgroundColor: 'rgba(73, 70, 70, 0.3)',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
};

export const searchInputStyle = {
    flexGrow: 1,
    '& .MuiInputBase-root': {
      backgroundColor: '#2a2a2a',
      borderRadius: '8px',
      color: '#fff',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#333333',
      },
    },
    '& label': {
      color: '#e0e0e0',
      opacity: 0.9,
    },
    '& label.Mui-focused': {
      color: '#e0e0e0',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#555',
        borderWidth: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#8a4b6d',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a25c80',
        borderWidth: '2px',
      },
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#aaa',
      opacity: 0.8,
    },
};

export const searchButtonStyle = {
    backgroundColor: '#8a4b6d',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: { xs: '0.5rem 1rem', sm: '0.5rem 2rem' },
    textTransform: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(138, 75, 109, 0.5)',
    '&:hover': {
      backgroundColor: '#a25c80',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(162, 92, 128, 0.7)',
    },
    minWidth: { xs: '100%', sm: '120px' },
};

export const bookCardStyle = {
    margin: { xs: '1rem 0', sm: '1rem' },
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    height: 'auto',
    maxHeight: '45rem',
    width: { xs: '100%', sm: '20rem' },
    transition: 'transform 0.2s, box-shadow 0.2s',
    backgroundColor: '#1e1e1e',
    color: '#e0e0e0',
    border: '1px solid #333',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    },
};

export const bookCardBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    borderBottom: '1px solid #494646',
    paddingBottom: '0.5rem',
};

export const bookCardTitleStyle = {
    color: '#e0e0e0',
    fontSize: { xs: '1rem', sm: '1.3rem' },
    fontWeight: 'bold',
    lineHeight: 1.2,
    maxWidth: 'calc(100% - 40px)',
    paddingRight: '0.5rem',
};

export const bookCardAddButtonStyle = {
    flexShrink: 0,
    border: '1px solid #fff',
    borderRadius: '50%',
    padding: '0.5rem',
    backgroundColor: '#8a4b6d',
    '&:hover': {
      backgroundColor: '#144216',
      cursor: 'pointer',
    },
};

export const bookCardAuthorStyle = {
    color: '#e0e0e0',
    fontSize: { xs: '0.8rem', sm: '1rem' },
    fontWeight: 'bold',
    marginBottom: '0.5rem',
};

export const bookCardImgNotSupportedStyle = {
    fontSize: '5rem',
    color: '#e0e0e0',
    marginTop: '1rem',
    marginBottom: '1rem',
};

export const bookCardCategoryBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
};

export const bookCardCategoryStyle = {
    color: '#e0e0e0',
    fontSize: '0.8rem',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
    backgroundColor: '#5a2b3d',
    padding: '0.5rem',
    borderRadius: '1rem',
};

export const bookCardDescriptionStyle = {
    height: "10rem",
    overflowY: "auto",
    padding: "12px",
    border: "1px solid #444",
    borderRadius: "4px",
    marginTop: "0.5rem",
    fontSize: { xs: '0.8rem', sm: '0.9rem' },
    lineHeight: "1.4",
};

export const datePickerStyle = {
    '& .MuiInputBase-root': {
      color: '#fff',
      backgroundColor: '#2a2a2a',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#333333',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#e0e0e0',
      opacity: 0.9,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#e0e0e0',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#555',
        borderWidth: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#8a4b6d',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a25c80',
        borderWidth: '2px',
      },
    },

    '& .MuiPickersPopper-root .MuiPaper-root': {
      backgroundColor: '#2a2a2a',
      color: '#e0e0e0',
    },
    '& .MuiPickersDay-root': {
      color: '#e0e0e0',
    },
    '& .MuiPickersDay-root.Mui-selected': {
      backgroundColor: '#8a4b6d',
    },
    '& .MuiPickersDay-root:hover': {
      backgroundColor: 'rgba(138, 75, 109, 0.3)',
    },
    '& .MuiPickersDay-today': {
      borderColor: '#8a4b6d',
    },
  };

export const datePickerPopperStyle = {
    '& .MuiPaper-root': {
        backgroundColor: '#2a2a2a',
        color: '#e0e0e0',
        border: '1px solid #555',
    },
    '& .MuiPickersDay-root': {
        color: '#e0e0e0',
    },
    '& .MuiPickersDay-root.Mui-selected': {
        backgroundColor: '#8a4b6d',
    },
    '& .MuiPickersDay-root:hover': {
        backgroundColor: 'rgba(138, 75, 109, 0.3)',
    },
    '& .MuiDayCalendar-weekDayLabel': {
        color: '#a25c80',
    },
    '& .MuiPickersCalendarHeader-root': {
        color: '#e0e0e0',
    },
    '& .MuiIconButton-root': {
        color: '#e0e0e0',
    },
    '& .MuiPickersYear-yearButton': {
        color: '#e0e0e0',
    },
    '& .MuiPickersYear-yearButton.Mui-selected': {
        backgroundColor: '#8a4b6d',
    },
};

export const showFiltersButtonStyle = {
    border: '1px solid #555',
    borderRadius: '8px',
    padding: '0.5rem',
    color: '#e0e0e0',
    '&:hover': {
      backgroundColor: 'rgba(138, 75, 109, 0.3)'
    }
};

export const filterBoxStyle = {
    backgroundColor: '#2a2a2a', 
    borderRadius: '8px', 
    p: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 3
};

export const paginationContainerDivStyle = {
    marginTop: "20px", 
    display: "flex", 
    justifyContent: "center"
};

export const paginationStyle = {
    '& .MuiPaginationItem-root': {
        color: '#e0e0e0',
    },
    '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: '#494646',
    },
};

export const appBarStyle = {
    backgroundColor: '#1e1e1e',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    mb: 4,
};

export const appBarTitleStyle = {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
};

export const appBarMenuButtonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    '&:hover': {
      transform: 'translateY(-2px)',
      transition: 'all 0.2s'
    }
};