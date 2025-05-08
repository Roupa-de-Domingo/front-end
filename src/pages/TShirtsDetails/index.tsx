import React from 'react';
import {
  BuyButton,
  DeliveryContainer,
  GuideSizeButton,
  ImgProductContainer,
  InfoContent,
  MainContainer,
  MainContent,
  Phrase,
  PriceContainer,
  SizeButton,
  SizesContainer,
  Title,
} from './styles';
import { MainTemplate } from '../../templates/MainTemplate';
import camisetaTeste from '../../assets/images/camiseta.webp';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';

const dataMock = {
  id: 1,
  title: 'Camiseta Pop Corn',
  pricePix: 75,
  priceCreditCard: 78,
  sizes: [
    { label: '2P', available: true },
    { label: 'P', available: true },
    { label: 'M', available: false },
    { label: 'G', available: true },
    { label: '2G', available: true },
    { label: '3G', available: true },
    { label: '4G', available: true },
  ],
};

export const TShirtsDetails: React.FC = () => {
  return (
    <MainTemplate>
      <MainContainer>
        <MainContent>
          <ImgProductContainer>
            <img src={camisetaTeste} alt="" />
          </ImgProductContainer>

          <InfoContent>
            <Title>{dataMock.title}</Title>

            <Phrase>
              # EVITE TROCA, CONFIRA A NOSSA TABELA DE MEDIDAS ANTES DE ESCOLHER
              O TAMANHO DA CAMISETA #
            </Phrase>

            <SizesContainer>
              <p>Tamanho</p>
              <div className="sizes-buttons">
                {dataMock.sizes.map((size) => {
                  return (
                    <SizeButton
                      available={size.available}
                      disabled={!size.available}
                      key={size.label}
                    >
                      {size.label}
                    </SizeButton>
                  );
                })}
              </div>
              <GuideSizeButton>Guia de tamanhos</GuideSizeButton>
            </SizesContainer>

            <PriceContainer>
              <p>
                <span>{formatRealCurrencyWithCipher(dataMock.pricePix)}</span>{' '}
                no pix
              </p>
              <p>
                {formatRealCurrencyWithCipher(dataMock.priceCreditCard)} em até
                2x de{' '}
                {formatRealCurrencyWithCipher(dataMock.priceCreditCard / 2)} sem
                juros
              </p>
            </PriceContainer>

            <BuyButton>COMPRAR</BuyButton>

            <DeliveryContainer>
              <p>Frete e prazo</p>
              <input type="text" placeholder="Insira seu CEP" />
              <button>Calcular</button>
            </DeliveryContainer>
          </InfoContent>
        </MainContent>
      </MainContainer>
    </MainTemplate>
  );
};
