import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: var(--neutral-black);
  display: flex;
  justify-content: space-around;
  flex: 1;
  padding: 32px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h3 {
    color: var(--neutral-500);
    margin-bottom: 6px;
  }

  a {
    color: var(--neutral-150);
    text-decoration: none;
  }

  .contact {
    div {
      flex-direction: row;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 24px;
    padding: 32px 20px;
  }
`;
