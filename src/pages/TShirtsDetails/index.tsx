import React, { useState } from 'react';
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
import camisetaTeste from '../../assets/images/camiseta.png';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';
import { ISizeTShirt } from '../../interfaces/product';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useMainContext } from '../../contexts/MainContext';

interface OpenSnackBarType {
  status: boolean;
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
}

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
  const [sizeSelected, setSizeSelected] = useState<ISizeTShirt>({
    label: '',
    available: false,
  });
  const [openSnackBar, setOpenSnackBar] = useState<OpenSnackBarType>({
    status: false,
    type: 'success',
    message: '',
  });
  const [cep, setCep] = useState('');

  const { setDataBag } = useMainContext();

  const handleSelectSize = (size: ISizeTShirt) => {
    setSizeSelected(size);
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const maskedValue = rawValue
      .replace(/^(\d{5})(\d)/, '$1-$2')
      .substring(0, 9);

    setCep(maskedValue);
    console.log({ maskedValue });
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar((oldState) => ({ ...oldState, status: false }));
  };

  const handleAddToBag = (id: number) => {
    if (!sizeSelected.label) {
      setOpenSnackBar({
        status: true,
        type: 'error',
        message: 'SELECIONE UM TAMANHO, ANIMAL!',
      });
    } else {
      const bag = JSON.parse(localStorage.getItem('bag') || '[]');

      const productIndex = bag.findIndex(
        (item: { id: number; sizeSelected: ISizeTShirt }) =>
          item.id === id && item.sizeSelected.label === sizeSelected.label
      );

      if (productIndex !== -1) {
        bag[productIndex].quantity += 1;
        localStorage.setItem('bag', JSON.stringify(bag));
        setDataBag(bag);
      } else {
        const updatedBag = [
          ...bag,
          {
            id: dataMock.id,
            title: dataMock.title,
            pricePix: dataMock.pricePix,
            priceCreditCard: dataMock.priceCreditCard,
            sizeSelected: sizeSelected,
            quantity: 1,
          },
        ];
        localStorage.setItem('bag', JSON.stringify(updatedBag));
        setDataBag(bag);
      }
    }
  };

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
                      selected={size.label === sizeSelected.label}
                      disabled={!size.available}
                      key={size.label}
                      onClick={() => handleSelectSize(size)}
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

            <BuyButton onClick={() => handleAddToBag(dataMock.id)}>
              ADICIONAR AO CARRINHO
            </BuyButton>

            <DeliveryContainer>
              <p>Frete e prazo</p>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Insira seu CEP"
                  value={cep}
                  onChange={handleCepChange}
                  maxLength={9}
                />
                <button>Calcular</button>
              </div>
            </DeliveryContainer>
          </InfoContent>
        </MainContent>
      </MainContainer>

      <div>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openSnackBar.status}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={openSnackBar.type}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {openSnackBar.message}
          </Alert>
        </Snackbar>
      </div>
    </MainTemplate>
  );
};
