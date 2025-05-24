import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { Form, MainContainer } from './styles';
import { ButtonDefault } from '../ButtonDefault';
import { useFinalizeOrderContext } from '../../contexts/FinalizeOrderContext';
import { IdeliverAddress } from '../../interfaces/order';

export const CepForm = () => {
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');

  const {
    accordionExpanded,
    setAccordionExpanded,
    setdeliverAddress,
    deliverAddress,
  } = useFinalizeOrderContext();

  const formik = useFormik({
    initialValues: {
      cep: deliverAddress?.cep || '',
      city: deliverAddress?.city || '',
      uf: deliverAddress?.uf || '',
      street: deliverAddress?.street || '',
      number: deliverAddress?.number || '',
      complement: deliverAddress?.complement || '',
      neighborhood: deliverAddress?.neighborhood || '',
    },
    validationSchema: Yup.object({
      cep: Yup.string()
        .matches(/^\d{5}-?\d{3}$/, 'CEP inválido (ex: 01001-000)')
        .required('CEP é obrigatório'),
      street: Yup.string().required('Rua é obrigatório'),
      neighborhood: Yup.string().required('Bairro é obrigatório'),
      number: Yup.number().required('Número é obrigatório'),
      complement: Yup.string(),
      city: Yup.string().required('Cidade é obrigatório'),
      uf: Yup.string().required('UF é obrigatório'),
    }),
    onSubmit: async (values) => {
      setdeliverAddress(values);
      setAccordionExpanded({
        ...accordionExpanded,
        deliver: false,
        freight: true,
      });
    },
  });

  const handleCepSearch = async () => {
    setError('');
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${formik.values.cep.replace('-', '')}/json/`
      );
      const data = await response.json();

      if (data.erro) {
        formik.setFieldError('cep', 'CEP não encontrado.');
      } else {
        setAddress(data);
        formik.setFieldValue('street', data.logradouro);
        formik.setFieldValue('neighborhood', data.bairro);
        formik.setFieldValue('city', data.localidade);
        formik.setFieldValue('uf', data.uf);
      }
    } catch (err) {
      formik.setFieldError('cep', 'Erro ao buscar endereço.');
    }
  };

  return (
    <MainContainer>
      <Form onSubmit={formik.handleSubmit}>
        <div className="line-cep">
          <div>
            <TextField
              fullWidth
              id="cep"
              name="cep"
              label="CEP"
              variant="outlined"
              value={formik.values.cep}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/\D/g, '');
                const maskedValue = rawValue
                  .replace(/^(\d{5})(\d)/, '$1-$2')
                  .substring(0, 9);

                formik.setFieldValue('cep', maskedValue);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.cep && Boolean(formik.errors.cep)}
              helperText={formik.touched.cep && formik.errors.cep}
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
          <ButtonDefault
            text="Buscar"
            color="neutral-white"
            backgroundColor="primary"
            width={'100%'}
            onClick={handleCepSearch}
            type="button"
          />
        </div>

        <div className="line-street">
          <TextField
            fullWidth
            id="street"
            name="street"
            label="Rua"
            variant="outlined"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
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

        <div className="line-neighborhood">
          <TextField
            fullWidth
            id="neighborhood"
            name="neighborhood"
            label="Bairro"
            variant="outlined"
            value={formik.values.neighborhood}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.neighborhood && Boolean(formik.errors.neighborhood)
            }
            helperText={
              formik.touched.neighborhood && formik.errors.neighborhood
            }
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

        <div className="line-number-complement">
          <TextField
            fullWidth
            id="number"
            name="number"
            label="Número"
            variant="outlined"
            value={formik.values.number}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/\D/g, '');
              const maskedValue = rawValue
                .replace(/^(\d{5})(\d)/, '$1-$2')
                .substring(0, 9);

              formik.setFieldValue('number', maskedValue);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
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
            id="complement"
            name="complement"
            label="Complemento"
            variant="outlined"
            value={formik.values.complement}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/\D/g, '');
              const maskedValue = rawValue
                .replace(/^(\d{5})(\d)/, '$1-$2')
                .substring(0, 9);

              formik.setFieldValue('complement', maskedValue);
            }}
            onBlur={formik.handleBlur}
            error={
              formik.touched.complement && Boolean(formik.errors.complement)
            }
            helperText={formik.touched.complement && formik.errors.complement}
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

        <div className="line-city-uf">
          <TextField
            fullWidth
            id="city"
            name="city"
            label="Cidade"
            variant="outlined"
            value={formik.values.city}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/\D/g, '');
              const maskedValue = rawValue
                .replace(/^(\d{5})(\d)/, '$1-$2')
                .substring(0, 9);

              formik.setFieldValue('city', maskedValue);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
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
            id="uf"
            name="uf"
            label="UF"
            variant="outlined"
            value={formik.values.uf}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/\D/g, '');
              const maskedValue = rawValue
                .replace(/^(\d{5})(\d)/, '$1-$2')
                .substring(0, 9);

              formik.setFieldValue('uf', maskedValue);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.uf && Boolean(formik.errors.uf)}
            helperText={formik.touched.uf && formik.errors.uf}
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

        <ButtonDefault
          text="Salvar e continuar"
          color="neutral-white"
          backgroundColor="primary"
          width={'100%'}
          type="submit"
        />
      </Form>
    </MainContainer>
  );
};
