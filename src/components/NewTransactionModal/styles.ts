import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    font-size: 1.25rem;
    color: var(--text-title);

    margin-bottom: 2rem;
  }

  input {
    font-size: 1rem;
    font-weight: 400;

    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: #e7e9ee;

    &&::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;

    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    margin-top: 1.5rem;

    border-radius: 0.25rem;
    border: 0;

    background-color: var(--green);

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) 
    : 'transparent'
  };

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;