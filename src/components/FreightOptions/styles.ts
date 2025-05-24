import styled from 'styled-components';

interface IFreightOptionsStyledProps {
  selected: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Option = styled.div<IFreightOptionsStyledProps>`
  background-color: ${({ selected }) =>
    selected ? 'var(--neutral-200)' : 'transparent'};
  border: 1px solid var(--neutral-300);
  border-radius: 4px;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--neutral-200);
    cursor: pointer;
  }
`;

export const OptionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  p {
    font-weight: 500;
  }
`;
