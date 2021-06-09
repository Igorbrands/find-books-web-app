import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  padding: 50px 20px;
`;

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    all: unset;
    position: absolute;
    left: 15px;
    top: 16px;
  }
  input {
    border: none;
    border-radius: 10px;
    width: 100%;
    padding: 16px 42px;
    font-size: 16px;
    line-height: 18px;
  }
`;
