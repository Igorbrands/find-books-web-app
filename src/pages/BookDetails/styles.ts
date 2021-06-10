import styled from 'styled-components';

export const Container = styled.div``;
export const ContainerTop = styled.div``;
export const BookDescription = styled.div`
  padding: 36px 20px;
  color: #36383a;

  font-size: 24px;
  font-weight: 400;
  span {
    font-size: 16px;
    line-height: 19px;
    color: #ff6978;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);
  }
  button {
    all: unset;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  padding: 20px;
  margin: 0 20px;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  li {
    display: flex;
    align-items: center;
    list-style: none;
    color: #3f4043;
    font-size: 14px;
    font-weight: 700;
    border-right: 1px solid rgba(151, 151, 151, 0.2);
    :last-child {
      border-right: unset;
    }
    span {
      margin-right: 20px;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
