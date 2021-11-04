import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/x-data-grid';
import { ptBR as corePtBr } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#127358',
        light: '#00fa9a',
      },
      secondary: {
        main: '##fed500',
        dark: '##e4c000',
      },
      common: {
        black: '#191a1a',
      },
    },
  },
  ptBR,
  corePtBr
);

export default theme;
