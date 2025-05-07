import React, { createContext, useContext, useEffect, useState } from 'react';
import { FilterType, SortFilter } from '../../interfaces/filters';

interface FiltersProviderType {
  sortFilterSelected: SortFilter;
  setSortFilterSelected: React.Dispatch<React.SetStateAction<SortFilter>>;

  themesSelecteds: FilterType[] | [];
  setThemesSelecteds: React.Dispatch<React.SetStateAction<FilterType[] | []>>;

  gendersSelecteds: FilterType[] | [];
  setGendersSelecteds: React.Dispatch<React.SetStateAction<FilterType[] | []>>;

  sizesSelecteds: FilterType[] | [];
  setSizesSelecteds: React.Dispatch<React.SetStateAction<FilterType[] | []>>;
}
const FiltersContext = createContext<FiltersProviderType | undefined>(
  undefined
);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sortFilterSelected, setSortFilterSelected] = useState({
    description: 'Lançamento',
    value: 'DESC',
  });
  const [themesSelecteds, setThemesSelecteds] = useState<FilterType[] | []>([]);
  const [gendersSelecteds, setGendersSelecteds] = useState<FilterType[] | []>(
    []
  );
  const [sizesSelecteds, setSizesSelecteds] = useState<FilterType[] | []>([]);

  useEffect(() => {}, []);

  return (
    <FiltersContext.Provider
      value={{
        sortFilterSelected,
        setSortFilterSelected,
        themesSelecteds,
        setThemesSelecteds,
        gendersSelecteds,
        setGendersSelecteds,
        sizesSelecteds,
        setSizesSelecteds,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFiltersContext must be used within a MainProvider');
  }
  return context;
};
