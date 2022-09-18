import styled from 'styled-components';

const ColorHash = require('color-hash').default;
const colorHash = new ColorHash();


export const LineItemContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const LineItemNumber = styled.div`
  font-size: 27px;
  margin-right: 16px;
  min-width: 16px;
`

export const UserNameContainer = styled.div`
  margin-right: 16px;
`;

export const AvatarStyles = (userName: string) => ({
    color: colorHash.hex(userName),
    width: '40px',
    height: '40px',
    marginRight: '16px'
})

export const TextContainer = styled.div`
  flex-grow: 1;
  overflow-wrap: anywhere;
`
