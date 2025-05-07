import styled from 'styled-components';

interface InputContainerStyledProps {
  justifyContent: string;
}

export const InputContainer = styled.div<InputContainerStyledProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
`;
