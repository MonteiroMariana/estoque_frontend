import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button<{ loading?: boolean }>`
  max-width: 600px;
  background-color: var(--red-900);
  border: 0;
  padding: 0.4rem;
  color: var(--white);
  border-radius: 0.5rem;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.08);
  }

  &:disabled {
    cursor: not-allowed;

    svg {
      animation: ${spinAnimation} 2s infinite;
    }
  }
`;

const ButtonText = styled.span`
  color: var(--white);
`;

export const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => {
  return (
    <StyledButton {...rest} disabled={loading}>
      {loading ? (
        <FaSpinner color={'#fff'} size={16} />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </StyledButton>
  );
};
