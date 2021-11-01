import * as React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, setValue, onBack }) => {
  return (
    <>
      <TextField
        placeholder="Pesquisar"
        type="text"
        variant="outlined"
        fullWidth
        size="small"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ArrowBackIcon aria-label="voltar" onClick={() => onBack()} />
            </InputAdornment>
          ),
          endAdornment: value && (
            <IconButton
              aria-label="limpa texto da pesquisa"
              onClick={() => setValue('')}
            >
              <CancelRoundedIcon />
            </IconButton>
          ),
        }}
      />
      <IconButton sx={{ p: '10px' }} aria-label="pesquisar">
        <SearchIcon />
      </IconButton>
    </>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  onBack: PropTypes.func,
};

export default SearchBar;
