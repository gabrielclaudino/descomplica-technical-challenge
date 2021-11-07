import { getGridStringOperators } from '@mui/x-data-grid';

export const filterOperators = getGridStringOperators().filter(({ value }) =>
  ['equals'].includes(value)
);

export default filterOperators;
