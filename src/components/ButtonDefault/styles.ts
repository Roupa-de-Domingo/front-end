import styled from 'styled-components';

interface ButtonStyledProps {
  backgroundColor: string;
  color: string;
  showBorderRadius?: boolean;
  width?: number | string | null;
  disabled?: boolean;
}

export const Button = styled.button<ButtonStyledProps>`
  align-items: center;
  display: flex;
  background-color: ${({ backgroundColor }) => `var(--${backgroundColor})`};
  background-color: ${({ disabled }) => disabled && `var(--neutral-500)`};
  border: ${({ backgroundColor, color }) =>
    backgroundColor === 'transparent' ? `2px solid var(--${color})` : 'none'};
  border-radius: ${({ showBorderRadius }) =>
    showBorderRadius ? '6px' : '0px'};
  color: ${({ color }) => `var(--${color})`};
  color: ${({ disabled }) => disabled && `var(--neutral-white)`};

  font-size: 16px;
  gap: 8px;
  padding: 16px 24px;
  justify-content: center;
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  transition: filter 0.2s;
  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`;
