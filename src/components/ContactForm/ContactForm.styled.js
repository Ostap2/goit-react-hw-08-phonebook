import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  gap: 1em;
  width: 400px;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.1em;
  }
  span {
    margin-left: 0.5em;
  }

  input {

    padding: 0.3em 0.5em;

  }

  button {
    transition: 0.8s; 
    width: 50%;
    padding: 0.3em 0.3em;
    border: black solid 1px;
    border-radius: 1em;
    background-color: transparent;
    &:hover,
    &:focus {
      scale: 1.1;
    }
  }
`;