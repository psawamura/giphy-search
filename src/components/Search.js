import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import axios from 'axios';

const CustomButton = styled(Button)`
  margin-left: 60px;
  height: 36px;
  align-self: center;
`;

const Search = ({ setResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = async (ev) => {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    ev.preventDefault();
    const request = await axios.get('https://api.giphy.com/v1/gifs/search	', {
      params: {
        api_key: apiKey,
        q: searchQuery,
        limit: 10,
      },
    });
    setResults(request.data.data);
  };

  const onClearSearch = () => {
    setSearchQuery('');
    setResults([]);
  };

  return (
    <div className="search-form flex centered">
      <form onSubmit={(ev) => onSearch(ev)}>
        <TextField
          value={searchQuery}
          onChange={(ev) => setSearchQuery(ev.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search" onClick={onSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      <CustomButton variant="contained" size="small" startIcon={<CloseIcon />} onClick={onClearSearch}>
        Clear search
      </CustomButton>
    </div>
  );
};

export default Search;
