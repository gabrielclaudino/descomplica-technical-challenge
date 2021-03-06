import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, IconButton, Link, Toolbar } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { styled } from '@mui/system';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
  },
}));

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar>
        <NextLink href="/" passHref>
          <Link href="/" sx={{ display: 'flex' }}>
            <Image
              src="/logo.svg"
              alt="Logo"
              loading="lazy"
              height={37}
              width="100%"
            />
          </Link>
        </NextLink>

        <Button
          variant="contained"
          disableElevation
          sx={{
            display: { xs: 'none', md: 'none' },
            whiteSpace: 'nowrap',
            minWidth: 'max-content',
            fontWeight: 'bold',
          }}
        >
          Adicionar aluno
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
