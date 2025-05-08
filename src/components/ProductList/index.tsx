import React, { useState } from 'react';
import { MainContainer, PaginationContainer, Products } from './styles';
import { ProductItem } from '../ProductItem';
import { tshirts } from './dataMock';
import { Pagination } from '@mui/material';

export const ProductList: React.FC = () => {
  const [page, setPage] = useState(0);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value - 1);
  };

  return (
    <MainContainer>
      <Products>
        {tshirts.map((item) => {
          return <ProductItem product={item} />;
        })}
      </Products>

      <PaginationContainer>
        <Pagination
          page={10}
          count={10}
          variant="outlined"
          shape="rounded"
          onChange={handleChangePage}
          boundaryCount={1}
          siblingCount={0}
          sx={{
            '.Mui-selected': {
              backgroundColor: '#000 !important',
              color: '#fff',
            },
          }}
        />
      </PaginationContainer>
    </MainContainer>
  );
};
