import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const StyledInput = styled.input`
  margin-bottom: 1rem;
  height: 40px;
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--dark-900);
  color: var(--white);
  padding: 1rem;
  border: 1px solid var(--gray-100);

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 1rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--dark-900);
  color: var(--white);
  padding: 1rem;
  border: 1px solid var(--gray-100);

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export const TextArea: React.FC<TextareaProps> = ({ ...rest }) => {
  return <StyledTextArea {...rest} />;
};
