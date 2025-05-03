import React, { useState } from 'react';
import {
  CreateAccount,
  ForgotPasswordBtn,
  MainContainer,
  Title,
} from './styles';
import { FormHelperText, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logoOriginal from '../../assets/images/logo-original.png';
import { ButtonDefault } from '../../components/ButtonDefault';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/apis/routes/auth.service';
import { jwtDecode } from 'jwt-decode';
import { LoginData } from '../../interfaces/user';
import { useMainContext } from '../../contexts/MainContext';
import { MainTemplate } from '../../templates/MainTemplate';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  const { setLoginData } = useMainContext();

  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    validationSchema: Yup.object({
      user: Yup.string().required('O usuário é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigatória'),
    }),
    onSubmit: async (values) => {
      try {
        localStorage.removeItem('cart');
        localStorage.removeItem('customerByIdSelected');
        localStorage.removeItem('customerSelected');
        localStorage.removeItem('playmentPlan');

        const loginResponse = await login(values.user, values.password);

        const token = loginResponse.token;

        const dados: LoginData = jwtDecode(token);

        setLoginData(dados);

        console.log({ dados });

        setLoginError(null);
        navigate('/clientes');
      } catch (error: unknown) {
        if (
          error instanceof Error &&
          (error as { response?: { data?: { message: string } } }).response
            ?.data?.message ===
            'BadCredentialsException: Usuário inexistente ou senha inválida'
        ) {
          setLoginError('Email ou senha incorretos');
        } else {
          console.log({ error });
          setLoginError('Ocorreu um erro ao tentar fazer login');
        }
      }
    },
  });

  return (
    <MainTemplate>
      <MainContainer>
        <div className="logo-container">
          <img src={logoOriginal} className="logo" />
        </div>

        <Title>Fazer login</Title>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="user"
            name="user"
            label="Usuário"
            variant="outlined"
            value={formik.values.user}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.user && Boolean(formik.errors.user)}
            helperText={formik.touched.user && formik.errors.user}
            sx={{
              mb: 2,
            }}
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
            id="password"
            name="password"
            label="Senha"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{
              mb: 2,
            }}
            InputProps={{
              style: {
                backgroundColor: 'transparent',
              },
            }}
            InputLabelProps={{
              style: { color: 'rgba(0, 0, 0, 0.6)' },
            }}
          />

          {loginError && (
            <FormHelperText sx={{ ml: 0, mb: 2 }} error={true}>
              {loginError}
            </FormHelperText>
          )}

          <ForgotPasswordBtn>Esqueceu a senha?</ForgotPasswordBtn>

          <div className="btn-submit-container">
            <ButtonDefault
              backgroundColor="primary"
              type="submit"
              color="neutral-white"
              text="Entrar"
            />
          </div>

          <CreateAccount>Criar conta</CreateAccount>
        </form>
      </MainContainer>
    </MainTemplate>
  );
};
