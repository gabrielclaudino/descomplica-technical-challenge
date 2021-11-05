import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/x-data-grid';
import { ptBR as corePtBr } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#00e88f',
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
