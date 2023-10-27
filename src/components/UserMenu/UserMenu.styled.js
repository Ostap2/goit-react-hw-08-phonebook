import styled from 'styled-components';

export const DivStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  margin-left: auto;

  p {
    border: 1px solid #000;
    border-radius: 1em;
    padding: 0.2em 0.5em;
    transition: 1s;
    &:hover,
    &:focus {
      scale: 1.1;
      transition: 1s;
    }
  }

   button {
    transition: 0.8s; 
    width: 120px;
    height: 50px;
    padding: 0.3em 0.3em;
    border: black solid 1px;
    border-radius: 30px;
    background-color: transparent;
    &:hover,
    &:focus {
      scale: 1.1;
    }
  }
`;
