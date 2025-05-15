import React, { useState } from 'react';
import {
  CountProduct,
  EmptyBag,
  MainContainer,
  ProductItem,
  ProductItemLeftContent,
  ProductItemRightContent,
  ProductsContainer,
  PurchaseSummaryBtns,
  PurchaseSummaryContainer,
} from './styles';
import { MainTemplate } from '../../templates/MainTemplate';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';
import { ModalContent } from '../../components/ModalContent';
import camisetaTeste from '../../assets/images/camiseta.png';
import { useMainContext } from '../../contexts/MainContext';
import { ISizeTShirt, ITShirtInBag } from '../../interfaces/product';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ButtonDefault } from '../../components/ButtonDefault';
import { useNavigate } from 'react-router-dom';

export const Bag: React.FC = () => {
  const [openCalculateShipping, setOpenCalculateShipping] = useState(false);

  const { setDataBag, dataBag, totalProductsInBag } = useMainContext();

  const navigate = useNavigate();

  const handleIncreaseAndDecrease = (
    product: ITShirtInBag,
    type: 'add' | 'del'
  ) => {
    const bag = JSON.parse(localStorage.getItem('bag') || '[]');

    const productIndex = bag.findIndex(
      (item: { id: number; sizeSelected: ISizeTShirt }) =>
        item.id === product.id &&
        item.sizeSelected.label === product.sizeSelected.label
    );

    if (productIndex !== -1) {
      type === 'add'
        ? (bag[productIndex].quantity += 1)
        : (bag[productIndex].quantity -= 1);
      localStorage.setItem('bag', JSON.stringify(bag));
      setDataBag(bag);
    }
  };

  const handleRemoveProduct = (product: ITShirtInBag) => {
    const bag = JSON.parse(localStorage.getItem('bag') || '[]');

    const updatedBag = bag.filter(
      (item: { id: number; sizeSelected: ISizeTShirt }) =>
        !(
          item.id === product.id &&
          item.sizeSelected.label === product.sizeSelected.label
        )
    );

    localStorage.setItem('bag', JSON.stringify(updatedBag));

    setDataBag(updatedBag);
  };

  if (dataBag?.length === 0) {
    return (
      <MainTemplate>
        <EmptyBag>
          <h2 className="title">Sua sacola está vazia</h2>
          <p className="subtitle">Deixa de ser sovina e encha essa sacola...</p>
          <ButtonDefault
            text="Ir gastar meu dinheiro"
            color="neutral-white"
            backgroundColor="primary"
            width={'fit-content'}
            onClick={() => navigate('/')}
          />
        </EmptyBag>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <MainContainer>
        <ProductsContainer>
          <div className="header">
            <div className="left-content">
              <i className="shopping-bag-icon">
                <ShoppingBagIcon fontSize="large" />
              </i>
              <p>Sacola</p>
            </div>

            {totalProductsInBag && (
              <p className="right-content">
                {totalProductsInBag}{' '}
                {totalProductsInBag > 1 ? 'Produtos' : 'Produto'}
              </p>
            )}
          </div>

          <div className="products">
            {dataBag &&
              dataBag.map((product) => {
                return (
                  <ProductItem>
                    <ProductItemLeftContent>
                      <img src={camisetaTeste} />

                      <div className="infos-container">
                        <p className="title">{product.title}</p>
                        <p className="gender">{product.gender}</p>
                        <p className="ref">Ref: {product.id}</p>
                        <p className="size">
                          Tamanho: {product.sizeSelected.label}
                        </p>
                      </div>
                    </ProductItemLeftContent>

                    <ProductItemRightContent>
                      <CountProduct>
                        <div>
                          <button
                            className="increase"
                            onClick={() =>
                              handleIncreaseAndDecrease(product, 'del')
                            }
                          >
                            -
                          </button>
                          <p>{product.quantity}</p>
                          <button
                            className="decrease"
                            onClick={() =>
                              handleIncreaseAndDecrease(product, 'add')
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="remove-product-btn"
                          onClick={() => handleRemoveProduct(product)}
                        >
                          {' '}
                          <DeleteForeverIcon />{' '}
                        </button>
                      </CountProduct>
                      <p className="total-value">
                        {formatRealCurrencyWithCipher(
                          product.priceCreditCard * product.quantity
                        )}
                      </p>
                    </ProductItemRightContent>
                  </ProductItem>
                );
              })}
          </div>
        </ProductsContainer>

        <PurchaseSummaryContainer>
          <p className="title">Resumo</p>
          <div className="line-item subtotal">
            <p>Subtotal</p>
            <p>{formatRealCurrencyWithCipher(80)}</p>
          </div>
          <div className="line-item shipping">
            <p>Frete</p>
            <p onClick={() => setOpenCalculateShipping(true)}>Calcular</p>
          </div>
          <div className="line-item total">
            <p>Total</p>
            <div className="total-info">
              <p>{formatRealCurrencyWithCipher(80)}</p>
              <p>à vista com 3% OFF</p>
              <p>ou 2x {formatRealCurrencyWithCipher(42.45)} sem juros</p>
            </div>
          </div>
          <PurchaseSummaryBtns>
            <ButtonDefault
              text="Finalizar a compra"
              color="neutral-white"
              backgroundColor="primary"
              onClick={() => navigate('/finalizar-pedido')}
            />
            <button
              className="continue-shopping-btn"
              onClick={() => navigate('/camisetas')}
            >
              Continuar comprando
            </button>
          </PurchaseSummaryBtns>
        </PurchaseSummaryContainer>
      </MainContainer>

      <ModalContent
        title={'Alterar o cliente esvaziará o carrinho. Deseja continuar?'}
        handleCloseModal={() => setOpenCalculateShipping(false)}
        open={openCalculateShipping}
      >
        <p>Teste</p>
      </ModalContent>
    </MainTemplate>
  );
};
