import * as React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, IconButton, Link, Toolbar } from '@mui/material';
import Image from 'next/image';
import SearchBar from '../SearchBar';

const Header = ({ value, setValue }) => {
  const [searchActive, setSearchActive] = React.useState(false);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {!searchActive ? (
          <>
            <Link href="#" sx={{ display: 'flex', flexGrow: 1 }}>
              <Image
                src="/logo.svg"
                alt="Logo"
                loading="lazy"
                height={37}
                width="100%"
              />
            </Link>
            <IconButton
              size="large"
              color="inherit"
              aria-label="Pesquisar"
              onClick={() => setSearchActive(true)}
            >
              <SearchIcon />
            </IconButton>
          </>
        ) : (
          <>
            <SearchBar
              value={value}
              setValue={setValue}
              onBack={() => setSearchActive(false)}
            ></SearchBar>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default Header;
