import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#00fa9a',
        dark: '#127358',
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
  ptBR
);

export default theme;
