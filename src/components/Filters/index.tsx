import React from 'react';
import { FilterSession, Header, MainContainer } from './styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { genders, sizes, themes } from './data';
import { useFiltersContext } from '../../contexts/FiltersContext';
import { FilterType } from '../../interfaces/filters';
import CloseIcon from '@mui/icons-material/Close';

const StyledCheckboxItem = (props: any) => (
  <Checkbox
    sx={{
      color: 'black',
      '&.Mui-checked': {
        color: 'black',
      },
    }}
    {...props}
  />
);

export const Filters: React.FC = () => {
  const {
    themesSelecteds,
    setThemesSelecteds,
    sizesSelecteds,
    setSizesSelecteds,
    gendersSelecteds,
    setGendersSelecteds,
  } = useFiltersContext();

  const handleChangeFilter = (
    event: React.ChangeEvent<HTMLInputElement>,
    filters: FilterType[],
    setFilters: React.Dispatch<React.SetStateAction<FilterType[] | []>>
  ) => {
    const filterId = Number(event.target.value);

    const selectedFilter = filters.find((filter) => filter.id === filterId);
    if (!selectedFilter) return;

    setFilters((prev) => {
      if (event.target.checked) {
        return [...prev, selectedFilter];
      } else {
        return prev.filter((filter) => filter.id !== filterId);
      }
    });
  };

  const handleRemoveFilter = (
    filterId: number,
    filters: FilterType[],
    setFilters: React.Dispatch<React.SetStateAction<FilterType[] | []>>
  ) => {
    const selectedFilter = filters.find((filter) => filter.id === filterId);
    if (!selectedFilter) return;

    setFilters((prev) => {
      return prev.filter((filter) => filter.id !== filterId);
    });
  };

  const handleCleanAllFillters = () => {
    setThemesSelecteds([]);
    setSizesSelecteds([]);
    setGendersSelecteds([]);
  };

  return (
    <MainContainer>
      {(themesSelecteds.length > 0 ||
        sizesSelecteds.length > 0 ||
        gendersSelecteds.length > 0) && (
        <Header>
          {themesSelecteds.length > 0 &&
            themesSelecteds.map((item) => {
              return (
                <div
                  key={item.name}
                  className="filter-selected-item"
                  onClick={() =>
                    handleRemoveFilter(
                      item.id,
                      themesSelecteds,
                      setThemesSelecteds
                    )
                  }
                >
                  <CloseIcon fontSize="small" />
                  <p>{item.name} </p>
                </div>
              );
            })}
          {sizesSelecteds.length > 0 &&
            sizesSelecteds.map((item) => {
              return (
                <div
                  key={item.name}
                  className="filter-selected-item"
                  onClick={() =>
                    handleRemoveFilter(
                      item.id,
                      sizesSelecteds,
                      setSizesSelecteds
                    )
                  }
                >
                  <CloseIcon fontSize="small" />
                  <p>{item.name} </p>
                </div>
              );
            })}
          {gendersSelecteds.length > 0 &&
            gendersSelecteds.map((item) => {
              return (
                <div
                  key={item.name}
                  className="filter-selected-item"
                  onClick={() =>
                    handleRemoveFilter(
                      item.id,
                      gendersSelecteds,
                      setGendersSelecteds
                    )
                  }
                >
                  <CloseIcon fontSize="small" />
                  <p>{item.name} </p>
                </div>
              );
            })}

          <button onClick={handleCleanAllFillters}>Limpar tudo</button>
        </Header>
      )}
      <div className="main-content">
        <FilterSession>
          <h3>Tema</h3>
          <div className="inputs">
            {themes.map((item) => {
              const isChecked = themesSelecteds?.some((t) => t.id === item.id);
              return (
                <FormControlLabel
                  key={item.id}
                  label={item.name}
                  sx={{
                    width: 'fit-content',
                  }}
                  control={
                    <StyledCheckboxItem
                      value={item.id}
                      checked={isChecked}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeFilter(event, themes, setThemesSelecteds)
                      }
                    />
                  }
                />
              );
            })}
          </div>
        </FilterSession>
        <FilterSession>
          <h3>Tamanho</h3>
          <div className="inputs">
            {sizes.map((item) => {
              const isChecked = sizesSelecteds?.some((t) => t.id === item.id);
              return (
                <FormControlLabel
                  key={item.id}
                  label={item.name}
                  sx={{
                    width: 'fit-content',
                  }}
                  control={
                    <StyledCheckboxItem
                      value={item.id}
                      checked={isChecked}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeFilter(event, sizes, setSizesSelecteds)
                      }
                    />
                  }
                />
              );
            })}
          </div>
        </FilterSession>
        <FilterSession>
          <h3>Gênero</h3>
          <div className="inputs">
            {genders.map((item) => {
              const isChecked = gendersSelecteds?.some((t) => t.id === item.id);
              return (
                <FormControlLabel
                  key={item.id}
                  label={item.name}
                  sx={{
                    width: 'fit-content',
                  }}
                  control={
                    <StyledCheckboxItem
                      value={item.id}
                      checked={isChecked}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeFilter(event, genders, setGendersSelecteds)
                      }
                    />
                  }
                />
              );
            })}
          </div>
        </FilterSession>
      </div>
    </MainContainer>
  );
};
