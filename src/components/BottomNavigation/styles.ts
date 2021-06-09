import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 52px;
  width: 100%;
  color: #bfbebf;
  background: #fff;
  a {
    text-decoration: none;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :first-child {
    color: #000;
  }
  svg {
    margin-bottom: 10px;
  }
`;
