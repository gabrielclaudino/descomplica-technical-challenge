import * as React from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const SearchBar = ({ value, setValue, sx }) => {
  return (
    <TextField
      placeholder="Pesquisar"
      type="text"
      variant="outlined"
      fullWidth
      size="small"
      sx={sx}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      InputProps={{
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
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  sx: PropTypes.object,
};

export default SearchBar;
