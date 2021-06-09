import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  padding: 50px 20px;
  button {
    all: unset;
    border-radius: 8px;
    padding: 12px;
    color: #fff;
    background: #ff6978;
    transform: all 0.2s;
    :hover {
      opacity: 0.9;
    }
  }
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
