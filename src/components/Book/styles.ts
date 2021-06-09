import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  margin-bottom: 14px;
  color: #313131;
  img {
    width: 100px;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 10px;
    filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
  }

  div {
    align-self: flex-start;
  }
`;

export const Title = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;
export const Author = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
`;
