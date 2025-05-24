import React from 'react';
import {
  Header,
  MainContainer,
  ProductItem,
  ProductsContainer,
  PurchaseSummaryContainer,
} from './styles';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';
import { useFinalizeOrderContext } from '../../contexts/FinalizeOrderContext';
import { useMainContext } from '../../contexts/MainContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import camisetaTeste from '../../assets/images/camiseta.png';

export const Summary: React.FC = () => {
  const { paymentSelected, freightSelected } = useFinalizeOrderContext();
  const { totalValueBagCreditCard, totalProductsInBag, dataBag } =
    useMainContext();

  const navigate = useNavigate();

  return (
    <MainContainer>
      {totalValueBagCreditCard && (
        <PurchaseSummaryContainer>
          <Header>
            <h3>
              {totalProductsInBag}{' '}
              {totalProductsInBag && totalProductsInBag > 1
                ? 'Produtos'
                : 'Produto'}
            </h3>
            <div className="icons" onClick={() => navigate('/sacola')}>
              <ShoppingBagIcon />
              <EditIcon />
            </div>
          </Header>

          <ProductsContainer>
            {dataBag &&
              dataBag.map((product) => {
                return (
                  <ProductItem>
                    <img src={camisetaTeste} />

                    <div className="infos-container">
                      <p className="product-title">{product.title}</p>
                      <p className="gender">{product.gender}</p>
                      <p className="ref">Ref: {product.id}</p>
                      <p className="size">
                        Tamanho: {product.sizeSelected.label}
                      </p>
                      <p className="cost">
                        {product.quantity}{' '}
                        {product.quantity > 1 ? 'unidades' : 'unidade'} por{' '}
                        <span>
                          {formatRealCurrencyWithCipher(
                            product.priceCreditCard * product.quantity
                          )}{' '}
                        </span>
                      </p>
                    </div>
                  </ProductItem>
                );
              })}
          </ProductsContainer>

          <p className="title">Resumo</p>
          <div className="line-item subtotal">
            <p>Subtotal</p>
            <p>
              {formatRealCurrencyWithCipher(
                paymentSelected.value || totalValueBagCreditCard
              )}
            </p>
          </div>
          <div className="line-item shipping">
            <p>Frete</p>
            <p>
              {freightSelected.value
                ? formatRealCurrencyWithCipher(freightSelected.value)
                : '--'}{' '}
            </p>
          </div>
          <div className="line-item total">
            <p>Total</p>
            <div className="total-info">
              <p>
                {formatRealCurrencyWithCipher(
                  (paymentSelected.value || totalValueBagCreditCard) +
                    freightSelected.value
                )}
              </p>
            </div>
          </div>
        </PurchaseSummaryContainer>
      )}
    </MainContainer>
  );
};
