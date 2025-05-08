import React, { useState } from 'react';
import {
  Banner,
  FiltersBtnsContainer,
  FiltersContainer,
  FiltersContainerMobile,
  MainContainer,
  MainContent,
  ProductsContainer,
  SortsContainer,
  SortsContainerMobile,
  SortMobileItem,
} from './styles';
import { MainTemplate } from '../../templates/MainTemplate';
import bannerImg from '../../assets/images/banner.webp';
import bannerMobileImg from '../../assets/images/banner-mobile.webp';
import { SortsSelect } from '../../components/SortsSelect';
import { Filters } from '../../components/Filters';
import { ProductList } from '../../components/ProductList';
import { useMedia } from 'react-use';
import CloseIcon from '@mui/icons-material/Close';
import { useFiltersContext } from '../../contexts/FiltersContext';
import { selectSortsOptions } from '../../components/SortsSelect/data';
import { SortFilter } from '../../interfaces/filters';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export const TShirts: React.FC = () => {
  const isMobile = useMedia('(max-width: 800px)');
  const [openFilterMobile, setOpenFilterMobile] = useState(false);
  const [openSortMobile, setOpenSortMobile] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [slideAnimationIn, setSlideAnimationIn] = useState<boolean>(false);
  const { sortFilterSelected, setSortFilterSelected } = useFiltersContext();

  const handleSetSort = (optionSelected: SortFilter) => {
    const selected = selectSortsOptions.find(
      (option) => option.description === optionSelected.description
    );

    if (selected) {
      setSortFilterSelected(selected);
      setSlideAnimationIn(false);
      setShowMainContent(true);
      setTimeout(() => {
        setOpenSortMobile(false);
      }, 300);
    }
  };

  const handleOpenMenu = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setSlideAnimationIn(true);
    setOpen(true);

    setTimeout(() => {
      setShowMainContent(false);
    }, 350);
  };

  const handleCloseMenu = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setSlideAnimationIn(false);
    setShowMainContent(true);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <MainTemplate>
      <MainContainer>
        {showMainContent && (
          <>
            <Banner>
              {isMobile ? (
                <img src={bannerMobileImg} />
              ) : (
                <img src={bannerImg} />
              )}
            </Banner>

            <FiltersBtnsContainer>
              <button
                className="filter"
                onClick={() => handleOpenMenu(setOpenFilterMobile)}
              >
                FILTRAR
              </button>
              <button
                className="order-by"
                onClick={() => handleOpenMenu(setOpenSortMobile)}
              >
                ORDENAR POR: <span>{sortFilterSelected.description}</span>
              </button>
            </FiltersBtnsContainer>

            <SortsContainer>
              <SortsSelect />
            </SortsContainer>
            <MainContent>
              <FiltersContainer>
                <Filters />
              </FiltersContainer>
              <ProductsContainer>
                <ProductList />
              </ProductsContainer>
            </MainContent>
          </>
        )}
      </MainContainer>

      {openFilterMobile && (
        <FiltersContainerMobile slideAnimationIn={slideAnimationIn}>
          <div className="header">
            <i
              className="close-icon"
              onClick={() => handleCloseMenu(setOpenFilterMobile)}
            >
              <CloseIcon />
            </i>
            <h3>FILTRAR POR</h3>
          </div>
          <div className="content">
            <Filters />
          </div>
        </FiltersContainerMobile>
      )}

      {openSortMobile && (
        <SortsContainerMobile slideAnimationIn={slideAnimationIn}>
          <div className="header">
            <i
              className="close-icon"
              onClick={() => handleCloseMenu(setOpenSortMobile)}
            >
              <CloseIcon />
            </i>
            <h3>ORDENAR POR</h3>
          </div>
          <div className="content">
            {selectSortsOptions.map((option) => {
              return (
                <div
                  className="sort-mobile-item-container"
                  onClick={() => handleSetSort(option)}
                >
                  {option.description === sortFilterSelected.description ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                  <SortMobileItem
                    sortActive={
                      option.description === sortFilterSelected.description
                    }
                  >
                    {option.description}{' '}
                  </SortMobileItem>
                </div>
              );
            })}
          </div>
        </SortsContainerMobile>
      )}
    </MainTemplate>
  );
};
