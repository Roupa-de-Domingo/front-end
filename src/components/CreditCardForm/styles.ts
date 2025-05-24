import styled from 'styled-components';

export const MainContainer = styled.div`
  .form-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 6px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 16px;

  .line-number-name-card {
    display: flex;
    gap: 16px;
  }

  .line-expiration-cvv {
    display: flex;
    gap: 16px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    .line-number-name-card,
    .line-expiration-cvv {
      flex-direction: column;
    }
  }
`;
