import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AddressInformation = styled.div`
  align-items: center;
  background-color: var(--status-error-100);
  border-radius: 6px;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 12px;
  padding: 16px;

  p {
    font-weight: 500;
  }
`;
