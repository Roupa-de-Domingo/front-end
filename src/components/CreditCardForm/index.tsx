import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { Form, MainContainer } from './styles';
import { ButtonDefault } from '../ButtonDefault';
import { useFinalizeOrderContext } from '../../contexts/FinalizeOrderContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { useMainContext } from '../../contexts/MainContext';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';

export const CreditCardForm: React.FC = () => {
  const {
    accordionExpanded,
    setAccordionExpanded,
    setCreditCardData,
    deliverAddress,
    freightSelected,
  } = useFinalizeOrderContext();

  const { parcelCreditCardQuantity, totalValueBagCreditCard } =
    useMainContext();

  const isDeliverAddressComplete = Object.entries(deliverAddress)
    .filter(([key]) => key !== 'complement')
    .every(([, value]) => value.trim() !== '');

  const expirationSchema = Yup.string()
    .required('Data de validade é obrigatória')
    .matches(/^(0[1-9]|1[0-2])\/\d{4}$/, 'Formato inválido (MM/AAAA)')
    .test('not-in-past', 'Data de validade expirada', (value) => {
      if (!value) return false;
      const [month, year] = value.split('/').map(Number);
      const now = dayjs();
      const expirationDate = dayjs(`${year}-${month}-01`).endOf('month');
      return expirationDate.isAfter(now, 'month');
    });

  const formik = useFormik({
    initialValues: {
      numberCard: '',
      nameCard: '',
      expiration: '',
      cvv: '',
      parcel: 1,
    },
    validationSchema: Yup.object({
      numberCard: Yup.string()
        .required('Número é obrigatório')
        .matches(/^(\d{4} ?){4}$/, 'Número de cartão inválido'),
      nameCard: Yup.string().required('Nome é obrigatório'),
      expiration: expirationSchema,
      cvv: Yup.string().required('Código é obrigatório'),
      parcel: Yup.number().required('Número de parcelas é obrigatório'),
    }),
    onSubmit: async (values) => {
      setCreditCardData(values);
      setAccordionExpanded({
        ...accordionExpanded,
        deliver: false,
        freight: true,
      });
    },
  });

  return (
    <MainContainer>
      <h3 className="form-title">Dados do cartão:</h3>
      <Form onSubmit={formik.handleSubmit}>
        <div className="line-number-name-card">
          <TextField
            fullWidth
            id="numberCard"
            name="numberCard"
            label="Número do Cartão"
            variant="outlined"
            value={formik.values.numberCard}
            onChange={(e) => {
              const rawValue = e.target.value
                .replace(/\D/g, '')
                .substring(0, 16);
              const maskedValue = rawValue.replace(/(.{4})/g, '$1 ').trim();
              formik.setFieldValue('numberCard', maskedValue);
            }}
            onBlur={formik.handleBlur}
            error={
              formik.touched.numberCard && Boolean(formik.errors.numberCard)
            }
            helperText={formik.touched.numberCard && formik.errors.numberCard}
            InputProps={{
              style: {
                backgroundColor: 'transparent',
              },
            }}
            InputLabelProps={{
              style: { color: 'rgba(0, 0, 0, 0.6)' },
            }}
          />
          <TextField
            fullWidth
            id="nameCard"
            name="nameCard"
            label="Nome completo no cartão"
            variant="outlined"
            value={formik.values.nameCard}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nameCard && Boolean(formik.errors.nameCard)}
            helperText={formik.touched.nameCard && formik.errors.nameCard}
            InputProps={{
              style: {
                backgroundColor: 'transparent',
              },
            }}
            InputLabelProps={{
              style: { color: 'rgba(0, 0, 0, 0.6)' },
            }}
          />
        </div>

        <div className="line-expiration-cvv">
          <TextField
            fullWidth
            id="expiration"
            name="expiration"
            label="Validade mês/ano"
            variant="outlined"
            value={formik.values.expiration}
            onChange={(e) => {
              const rawValue = e.target.value
                .replace(/\D/g, '')
                .substring(0, 6); // aceita até 6 dígitos numéricos
              const maskedValue = rawValue.replace(
                /^(\d{0,2})(\d{0,4})/,
                (_, mm, yyyy) => (yyyy ? `${mm}/${yyyy}` : mm)
              );
              formik.setFieldValue('expiration', maskedValue);
            }}
            onBlur={formik.handleBlur}
            error={
              formik.touched.expiration && Boolean(formik.errors.expiration)
            }
            helperText={formik.touched.expiration && formik.errors.expiration}
            InputProps={{
              style: {
                backgroundColor: 'transparent',
              },
            }}
            InputLabelProps={{
              style: { color: 'rgba(0, 0, 0, 0.6)' },
            }}
          />

          <TextField
            fullWidth
            id="cvv"
            name="cvv"
            label="Cód de segurança"
            variant="outlined"
            value={formik.values.cvv}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/\D/g, '');
              const maskedValue = rawValue
                .replace(/^(\d{5})(\d)/, '$1-$2')
                .substring(0, 9);

              formik.setFieldValue('cvv', maskedValue);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.cvv && Boolean(formik.errors.cvv)}
            helperText={formik.touched.cvv && formik.errors.cvv}
            InputProps={{
              style: {
                backgroundColor: 'transparent',
              },
            }}
            InputLabelProps={{
              style: { color: 'rgba(0, 0, 0, 0.6)' },
            }}
          />
        </div>

        <div className="line-parcel">
          <FormControl fullWidth>
            <InputLabel id="parcel-select-label">Parcelas</InputLabel>
            <Select
              labelId="parcel-select-label"
              id="parcel"
              name="parcel"
              value={formik.values.parcel}
              label="Parcelas"
              onChange={(e) => formik.setFieldValue('parcel', e.target.value)}
              onBlur={formik.handleBlur}
              error={formik.touched.parcel && Boolean(formik.errors.parcel)}
            >
              {totalValueBagCreditCard &&
                parcelCreditCardQuantity(totalValueBagCreditCard).map(
                  (item) => {
                    return (
                      <MenuItem value={item.quantityParcela}>
                        {item.quantityParcela} x{' '}
                        {formatRealCurrencyWithCipher(item.valueParcela)}
                      </MenuItem>
                    );
                  }
                )}
            </Select>
          </FormControl>
        </div>

        <ButtonDefault
          text="Finalizar compra"
          color="neutral-white"
          backgroundColor="primary"
          width={'100%'}
          type="submit"
          disabled={!isDeliverAddressComplete || !freightSelected.title}
        />
      </Form>
    </MainContainer>
  );
};
