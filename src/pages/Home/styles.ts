import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 20px;
  overflow-y: scroll;
  overflow-x: hidden;

  section {
    margin-bottom: 30px;
  }
`;

export const WelcomeTitle = styled.div`
  color: #54565a;
  font-size: 24px;
  font-weight: 600;

  span {
    color: #ff6978;
  }
`;
export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;

  h3 {
    font-size: 18px;
    color: #3f4043;
  }
  span {
    font-size: 14px;
    color: #4abdf1;
    cursor: pointer;
  }
`;
export const Banner = styled.div`
  display: inline-flex;
  img {
    cursor: pointer;
    :first-child {
      margin-right: 4px;
    }
  }
`;

export const SearchBar = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    all: unset;
    position: absolute;
    left: 15px;
    top: 16px;
    cursor: pointer;
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
