import styled from 'styled-components';

export const Input = styled.input``;

export const Label = styled.label`
  pointer-events: none;
  left: 20px;
  top: 14px;
  transition: 0.3s ease all;

  ${Input}:focus ~ & {
    top: 6px;
    left: 5px;
    font-size: 11px;
    opacity: 0.6;
  }
`;