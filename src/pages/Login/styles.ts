import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat, repeat;
  background-size: cover, 50px 50px;
  display: flex;
  flex-direction: column;

  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 550px;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      max-width: 270px;
    }
  }

  .btn-submit-container {
    button {
      height: 56px;
    }
  }

  @media (max-width: 1200px) {
    align-items: center;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100%;

    .logo-container {
      max-width: 350px;

      img {
        max-width: 100%;
      }
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 64px;
`;

export const ForgotPasswordBtn = styled.a`
  cursor: pointer;
  margin: 8px 0 24px;
  text-decoration: underline;
`;

export const CreateAccount = styled.a`
  cursor: pointer;
  margin-top: 32px;
  text-align: center;
  text-decoration: underline;
`;

export const ButtonSubmit = styled.button`
  background-color: var(--primary-blue);
  border-radius: 10px;
  border: none;
  color: var(--neutral-white);
  cursor: pointer;
  font-size: 20px;
  font-weight: var(--fontWeightMedium);
  outline: none;
  padding: 16px;
  margin-top: 16px;
  width: 100%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
