import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  padding: 60px 20px;
  section {
    margin-bottom: 8px;
  }
  button {
    all: unset;
    border-radius: 8px;
    margin-top: 8px;
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
  width: 100%;

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
    margin-bottom: 42px;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const LoadMore = styled.div`
  width: 100%;
  margin-bottom: 48px;
  display: flex;

  button {
    width: 100%;
    text-align: center;
  }
`;
export const Error = styled.span`
  color: #c53030;
`;
export const NoCoverBook = styled.div`
  width: 100px;
  height: 150px;
  background: #c2c2c2;
  color: #000;
  border-radius: 8px;
  margin-bottom: 10px;
  filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
`;
