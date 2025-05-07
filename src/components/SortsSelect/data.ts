import { SortFilter } from '../../interfaces/filters';

export const selectSortsOptions: SortFilter[] = [
  {
    description: 'Lançamento',
    value: 'DESC',
  },
  {
    description: 'Menor preço',
    value: 'ASC',
  },
  {
    description: 'Maior preço',
    value: 'DESC',
  },
  {
    description: 'A-Z',
    value: 'ASC',
  },
  {
    description: 'Z-A',
    value: 'DESC',
  },
];
