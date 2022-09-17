import styled from 'styled-components';

export const Container = styled.div`
`

export const LineListContainer = styled.div`
  min-height: 128px
`;

export const InputContainer = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 16px;
  margin-right: 4px;
  padding: 8px;
  font-size: 16px;
`;

export const SubmitButton = styled.div`
  width: 172px;
  background: #B19D7F;
  height: 60px;
  font-size: 21px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SubmitButtonStyles = {
    color: 'black',
    height: '22x',
    width: '32px',
    cursor: 'pointer',
}