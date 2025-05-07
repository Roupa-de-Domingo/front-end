import React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { MainContainer } from './styles';
import { InputSelect } from '../InputSelect';
import { useFiltersContext } from '../../contexts/FiltersContext';
import { selectSortsOptions } from './data';

export const SortsSelect: React.FC = () => {
  const { sortFilterSelected, setSortFilterSelected } = useFiltersContext();

  const handleSetSort = (event: SelectChangeEvent<string | number>) => {
    const selected = selectSortsOptions.find(
      (option) => option.description === event.target.value
    );

    if (selected) {
      setSortFilterSelected(selected);
    }
  };

  return (
    <MainContainer>
      <InputSelect
        value={sortFilterSelected.description}
        label="Ordernar por"
        options={selectSortsOptions}
        onChange={handleSetSort}
        justifyContent="flex-end"
        width={250}
      />
    </MainContainer>
  );
};
