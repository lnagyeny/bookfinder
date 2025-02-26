import { TextField, Button, Box, InputAdornment, IconButton, Collapse, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {searchBarBoxStyle, searchInputStyle, searchButtonStyle, datePickerPopperStyle, showFiltersButtonStyle, filterBoxStyle } from "./styles";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { datePickerStyle } from "./styles";

interface SearchBarProps {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  dateRange: {startDate: Date | null, endDate: Date | null};
  setDateRange: (range: {startDate: Date | null, endDate: Date | null}) => void;
  ebookOnly: boolean;
  setEbookOnly: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
    search, 
    handleChange, 
    handleSearch,
    dateRange,
    setDateRange,
    ebookOnly,
    setEbookOnly
  }) => {
    const [showFilters, setShowFilters] = useState(false);
    
    return (
      <Box sx={searchBarBoxStyle} >
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '1rem',
          width: '100%',
        }}>
          <TextField
            fullWidth
            label="Search for books"
            variant="outlined"
            value={search}
            onChange={handleChange}
            placeholder="Title, author, category..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#e0e0e0', opacity: 0.9 }} />
                </InputAdornment>
              ),
            }}
            sx={searchInputStyle}
          />
          {/* show filter menu button */}
          <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
            <IconButton 
              onClick={() => setShowFilters(!showFilters)}
              sx={{ 
                ...showFiltersButtonStyle,
                backgroundColor: showFilters ? 'rgba(138, 75, 109, 0.2)' : 'transparent',
              }}
            >
              <FilterListIcon />
            </IconButton>
            
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={searchButtonStyle}
              disableElevation
            >
              Search
            </Button>
          </Box>
        </Box>
        {/* show filters */}
        <Collapse in={showFilters} sx={{ width: '100%', mt: 2 }}>
          <Box sx={filterBoxStyle}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                <DatePicker 
                  label="Published after"
                  value={dateRange.startDate}
                  onChange={(date) => setDateRange({...dateRange, startDate: date})}
                  format="dd/MM/yyyy"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      sx: datePickerStyle
                    },
                    popper: {
                      sx: datePickerPopperStyle
                    }
                  }}
                />
                <DatePicker 
                  label="Published before"
                  value={dateRange.endDate}
                  onChange={(date) => setDateRange({...dateRange, endDate: date})}
                  format="dd/MM/yyyy"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      sx: datePickerStyle
                    },
                    popper: {
                      sx: datePickerPopperStyle
                    }
                  }}
                />
              </Box>
            </LocalizationProvider>
            
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <FormGroup>
                <FormControlLabel 
                  control={
                    <Checkbox 
                      checked={ebookOnly} 
                      onChange={(e) => setEbookOnly(e.target.checked)}
                      sx={{
                        color: '#8a4b6d',
                        '&.Mui-checked': {
                          color: '#a25c80',
                        },
                      }}
                    />
                  } 
                  label="E-book availability only" 
                  sx={{ color: '#e0e0e0' }}
                />
              </FormGroup>
            </Box>
          </Box>
        </Collapse>
      </Box>
    );
  };

export default SearchBar;