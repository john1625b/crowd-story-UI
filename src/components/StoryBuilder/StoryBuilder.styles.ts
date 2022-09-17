import styled from 'styled-components';

export const Container = styled.div`
`

export const Header = styled.h1`
  text-align: center;
`
export const InputContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  height: 16px;
  border-radius: 16px;
  margin-right: 4px;
  padding: 8px;
  font-size: 16px;
`;

export const SubmitButtonStyles = {
    color: 'teal',
    height: '32px',
    width: '32px',
    cursor: 'pointer',
}